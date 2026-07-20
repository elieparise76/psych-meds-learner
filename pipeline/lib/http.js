// http.js — polite, cached, retrying fetch for the data pipeline.
//
// Every raw response is cached to data/raw/<source>/<key>.json so that:
//   1. the deck build is reproducible offline after a first fetch, and
//   2. re-runs don't hammer the public APIs.
//
// Pass --refresh to run.js to bypass the cache and re-hit the network.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const RAW_DIR = join(__dirname, '..', '..', 'data', 'raw');

let REFRESH = process.argv.includes('--refresh');
export function setRefresh(v) { REFRESH = !!v; }

// Simple per-host politeness gate: minimum gap between requests to the same host.
const lastHit = new Map();
const MIN_GAP_MS = {
  'api.fda.gov': 350,                       // openFDA: 240/min anon → be gentle
  'health-products.canada.ca': 250,         // DPD
  'dailymed.nlm.nih.gov': 300,
};

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

function hostOf(url) {
  try { return new URL(url).host; } catch { return 'unknown'; }
}

async function politeWait(url) {
  const host = hostOf(url);
  const gap = MIN_GAP_MS[host] ?? 200;
  const last = lastHit.get(host) ?? 0;
  const wait = last + gap - Date.now();
  if (wait > 0) await sleep(wait);
  lastHit.set(host, Date.now());
}

function safeKey(key) {
  return String(key).replace(/[^a-z0-9._-]+/gi, '_').slice(0, 180);
}

async function cachePath(source, key) {
  const dir = join(RAW_DIR, safeKey(source));
  await mkdir(dir, { recursive: true });
  return join(dir, safeKey(key) + '.json');
}

/**
 * Fetch JSON with caching + retry. Returns { ok, status, data, cached, url }.
 * A 404 is a normal "no record" answer (openFDA returns 404 for empty searches),
 * so it resolves with ok:false rather than throwing.
 *
 * @param {string} url
 * @param {object} opts { source, key, retries, timeoutMs, accept404 }
 */
export async function getJSON(url, opts = {}) {
  const {
    source = 'misc',
    key = url,
    retries = 3,
    timeoutMs = 25000,
  } = opts;

  const cp = await cachePath(source, key);

  if (!REFRESH && existsSync(cp)) {
    try {
      const cached = JSON.parse(await readFile(cp, 'utf8'));
      return { ...cached, cached: true };
    } catch {
      // fall through to network on a corrupt cache file
    }
  }

  let lastErr = null;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      await politeWait(url);
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), timeoutMs);
      let res;
      try {
        res = await fetch(url, {
          signal: ctrl.signal,
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'psych-meds-learner-pipeline/1.0 (educational; +https://github.com/elieparise76/psych-meds-learner)',
          },
        });
      } finally {
        clearTimeout(t);
      }

      // 429 / 5xx → retry with backoff
      if (res.status === 429 || res.status >= 500) {
        lastErr = new Error(`HTTP ${res.status} for ${url}`);
        await sleep(600 * (attempt + 1) + 200 * attempt);
        continue;
      }

      let data = null;
      const text = await res.text();
      if (text) {
        try { data = JSON.parse(text); } catch { data = { _raw: text.slice(0, 4000) }; }
      }

      const record = { ok: res.ok, status: res.status, url, data, fetchedAt: nowISO() };
      // Cache both hits and clean "no record" 404s so re-runs are stable.
      if (res.ok || res.status === 404) {
        await writeFile(cp, JSON.stringify(record, null, 2)).catch(() => {});
      }
      return { ...record, cached: false };
    } catch (err) {
      lastErr = err;
      await sleep(500 * (attempt + 1));
    }
  }
  return { ok: false, status: 0, url, data: null, error: String(lastErr), cached: false };
}

// Pipeline avoids Date.now-in-workflow concerns (that's a Workflow constraint, not Node);
// here we can stamp real time.
export function nowISO() {
  return new Date().toISOString();
}

export function today() {
  return new Date().toISOString().slice(0, 10);
}
