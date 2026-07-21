# app/audio/ — tutorial narration (Neuro's voice)

The guided tutorial always works as text. Drop one MP3 per step here and it plays that clip
while narration is on (Settings → *Tutorial narration*). Because you can't press **Next** until
the clip finishes, the voice sets the pace of the whole (non-skippable) tour.

## The 10 clips — exact filenames

Name each file by the step `id`, lowercase, `.mp3`. The full set (order = tour order):

```
welcome.mp3   home.mp3   lesson.mp3   review.mp3   practice.mp3
wiki.mp3      compare-cram.mp3   progress.mp3   safety.mp3   go.mp3
```

Put them **right here**, in `app/audio/`. That's it — no config, no rebuild. The exact text for
each is in `pipeline/tutorial-script.js` (single source of truth). If you edit the script, re-run
`node pipeline/build-content.js` and re-record the changed clips.

## Generating them from the ElevenLabs website (free account)

1. Sign in at elevenlabs.io → **Text to Speech**.
2. Pick a voice that fits Neuro — poised, self-assured, faintly superior. A **British male**
   reads the pretentiousness best; the stock voice **"Daniel"** is a great match (also good:
   "George", "Adam"). Any stock voice is fine — please don't clone a real person.
3. Optional settings for character: **Stability ~0.4**, **Style ~0.35**, Speaker boost on.
4. Paste **one step's text**, generate, **Download** the MP3, and rename it to that step's
   filename above (e.g. the first paragraph → `welcome.mp3`). Repeat for all 10.
5. Drop all 10 into this folder. Reload the app and start/replay the tour — Neuro speaks, and
   Next stays locked until each line finishes.

Total narration is ~2,000 characters across the 10 clips — comfortably inside the ElevenLabs
free monthly character budget.

## Or generate them via the API (optional)

If you'd rather script it: `export ELEVENLABS_API_KEY=…` (and optionally
`ELEVENLABS_VOICE_ID=…`; it defaults to "Daniel"), then `cd pipeline && node build-tutorial-audio.js`.
Writes all `app/audio/<id>.mp3`. The key is read from the env only and never stored. Commit the
MP3s to ship the voice — playback is fully offline (no runtime CDN).
