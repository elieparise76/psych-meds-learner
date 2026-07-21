# app/audio/ — optional tutorial narration

The guided tutorial ("Neuro") always works as text. If you want **voice narration**, drop one
MP3 per tutorial step here, named by the step `id` (see `pipeline/tutorial-script.js`), e.g.
`welcome.mp3`, `home.mp3`, … `go.mp3`. The app plays `app/audio/<id>.mp3` for each step when it
exists and narration is enabled (Settings → *Tutorial narration*).

## Generate them with ElevenLabs (stays offline)

The clips are **pre-generated and committed** — they play locally, so the app remains fully
offline (no runtime CDN). To generate:

```bash
export ELEVENLABS_API_KEY=your_key_here          # your key; read from env only, never committed
export ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM  # optional: a stock ElevenLabs voice
cd pipeline
node build-tutorial-audio.js
```

This writes `app/audio/<id>.mp3` for every step. Commit them to ship the voice. Uses an
ElevenLabs **stock** voice (not a cloned real person). Re-run after editing
`pipeline/tutorial-script.js`.
