// build-tutorial-audio.js — OPTIONAL. Pre-generate the tutorial narration as MP3 clips via the
// ElevenLabs text-to-speech API, saved to ../app/audio/<step-id>.mp3. The app plays them
// locally (offline; no runtime CDN). Voice is a drop-in enhancement — the tutorial always works
// as text without these files.
//
// Usage:
//   export ELEVENLABS_API_KEY=sk_...            # YOUR key — never commit it; read from env only
//   export ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM   # optional; defaults to a stock voice ("Rachel")
//   node build-tutorial-audio.js
//
// Notes: uses an ElevenLabs STOCK voice (not a cloned real person). The key is read from the
// environment and never written to disk. Re-run after editing tutorial-script.js.

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { TUTORIAL } from './tutorial-script.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'app', 'audio');

const KEY = process.env.ELEVENLABS_API_KEY;
// Default to a stock British male voice ("Daniel") — the poised, faintly superior register
// that suits Neuro. Override with any stock voice id via ELEVENLABS_VOICE_ID.
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'onwK4e9ZLuTAKqWW03F9'; // stock "Daniel" (male)
const MODEL = process.env.ELEVENLABS_MODEL || 'eleven_turbo_v2_5';

if (!KEY) {
  console.log([
    'No ELEVENLABS_API_KEY in the environment — nothing generated (the tutorial still works as text).',
    '',
    'To add narration:',
    '  export ELEVENLABS_API_KEY=your_key_here',
    '  export ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM   # optional stock voice',
    '  node build-tutorial-audio.js',
    '',
    'The generated app/audio/*.mp3 files play offline; the key is never stored.',
  ].join('\n'));
  process.exit(0);
}

async function synth(step) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'xi-api-key': KEY, 'Content-Type': 'application/json', 'Accept': 'audio/mpeg' },
    body: JSON.stringify({
      text: step.text,
      model_id: MODEL,
      // a touch more "style" for Neuro's theatrical, self-assured delivery
      voice_settings: { stability: 0.45, similarity_boost: 0.75, style: 0.35, use_speaker_boost: true },
    }),
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} ${msg.slice(0, 200)}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const path = join(OUT, `${step.id}.mp3`);
  await writeFile(path, buf);
  return { id: step.id, bytes: buf.length };
}

await mkdir(OUT, { recursive: true });
console.log(`Generating ${TUTORIAL.length} clips with voice ${VOICE_ID} (${MODEL})…`);
let ok = 0;
for (const step of TUTORIAL) {
  try {
    const r = await synth(step);
    ok++;
    console.log(`  ✓ ${r.id}.mp3 (${Math.round(r.bytes / 1024)} KB)`);
  } catch (e) {
    console.log(`  ✗ ${step.id}: ${e.message}`);
  }
}
console.log(`\nDone: ${ok}/${TUTORIAL.length} clips written to app/audio/. Commit them to ship the voice.`);
