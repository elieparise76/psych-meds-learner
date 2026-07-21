# Titrate.app — the double-clickable macOS app

A tiny **native** macOS wrapper around the Titrate web app. It embeds the whole app inside a
`WKWebView` (WebKit ships with every Mac), so there is **nothing to install** — no browser, no
server, no Python/Node — and it runs fully offline.

- **Self-contained & sendable.** One `.app` bundle. Zip it, send it, done.
- **Universal.** Built for both Apple Silicon (arm64) and Intel (x86_64) — runs on any modern Mac.
- **Keeps your progress.** The app serves its files from a stable origin (`titrate://app`), so
  `localStorage` — streak, XP, learned meds, SRS schedule — **persists across launches** (stored
  under `~/Library/WebKit/com.titrate.app/`). Verified: `createdAt`/`seed` are unchanged across a
  quit + relaunch.
- **Icon:** purple square, white ψ.

## Send it to someone

The build produces **`dist/Titrate-macOS.zip`** — that's the file to send (a `.app` is a folder,
so it must be zipped to send intact). The recipient:

1. Unzips it → `Titrate.app`.
2. Because it isn't from the App Store / not notarized, macOS Gatekeeper blocks the first open.
   **Right-click `Titrate.app` → Open → Open.** (Only needed once; it opens normally after.)
   - On recent macOS you may instead need: **System Settings → Privacy & Security → “Open Anyway.”**
   - Command-line equivalent: `xattr -dr com.apple.quarantine /path/to/Titrate.app`
3. Double-click from then on. Move it to `/Applications` if you like.

> Making the first launch *completely* frictionless (no right-click) requires signing +
> notarizing with a paid Apple Developer account. If you have one, sign with your Developer ID and
> run `xcrun notarytool submit` on the zip — then anyone can just double-click. Otherwise the
> one-time right-click-Open is expected for any unsigned Mac app.

## Build / rebuild it

Needs only the macOS toolchain (Xcode Command Line Tools: `swiftc`, `sips`, `iconutil`, `lipo`,
`codesign`, `ditto`). From the repo root:

```bash
app-package/make-app.sh
```

That regenerates the icon, compiles the universal binary, bundles the current web assets
(`index.html`, `app/`, the five `data/*.js`), ad-hoc-signs the bundle, and writes
`dist/Titrate.app` + `dist/Titrate-macOS.zip`. Re-run it after changing any app code.

## What's here

- `src/main.swift` — the app: an `NSWindow` + `WKWebView`, a `WKURLSchemeHandler` that serves the
  bundled assets over `titrate://` (with HTTP-range support so the tutorial audio plays), a
  persistent data store, and a minimal menu.
- `src/make-icon.swift` — draws the purple-ψ icon (rendered to PNG → `iconutil` → `AppIcon.icns`).
- `Info.plist` — bundle metadata (`com.titrate.app`, icon, min macOS 11).
- `make-app.sh` — the reproducible assembler described above.

## Notes

- **Storage origin.** Progress lives at origin `titrate://app`, which is **different** from opening
  `index.html` in a browser (`file://`) or over `http://localhost`. Progress does not carry over
  between those automatically — use **Settings → Export / Import** (JSON) to move it.
- **Updating the app** for an existing user preserves their data (same bundle id → same
  `localStorage`). Ship a new build the same way.
