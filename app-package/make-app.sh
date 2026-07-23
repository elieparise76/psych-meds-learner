#!/bin/bash
# make-app.sh — assemble Titrate.app from the repo, reproducibly. No external dependencies:
# only the macOS toolchain (swiftc, sips, iconutil, lipo, codesign, ditto). Output goes to
# ../dist/Titrate.app and ../dist/Titrate-macOS.zip (the zip is what you send to people).
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/.." && pwd)"
BUILD="$HERE/build"
APP="$BUILD/Titrate.app"
DIST="$REPO/dist"

echo "==> Clean"
rm -rf "$APP"
mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources/web" "$BUILD"

echo "==> Icon (purple square, white psi)"
swift "$HERE/src/make-icon.swift" "$BUILD/icon_1024.png" 1024 >/dev/null
ICONSET="$BUILD/AppIcon.iconset"
rm -rf "$ICONSET"; mkdir -p "$ICONSET"
for s in 16 32 128 256 512; do
  sips -z "$s" "$s"           "$BUILD/icon_1024.png" --out "$ICONSET/icon_${s}x${s}.png"    >/dev/null
  d=$((s * 2))
  sips -z "$d" "$d"           "$BUILD/icon_1024.png" --out "$ICONSET/icon_${s}x${s}@2x.png" >/dev/null
done
iconutil -c icns "$ICONSET" -o "$APP/Contents/Resources/AppIcon.icns"

echo "==> Compile"
swiftc -O -target arm64-apple-macosx11.0 "$HERE/src/main.swift" -o "$BUILD/Titrate-arm64"
if swiftc -O -target x86_64-apple-macosx11.0 "$HERE/src/main.swift" -o "$BUILD/Titrate-x86_64" 2>/dev/null; then
  lipo -create "$BUILD/Titrate-arm64" "$BUILD/Titrate-x86_64" -output "$APP/Contents/MacOS/Titrate"
  echo "    universal binary (arm64 + x86_64)"
else
  cp "$BUILD/Titrate-arm64" "$APP/Contents/MacOS/Titrate"
  echo "    arm64-only (x86_64 cross-compile unavailable on this machine)"
fi
chmod +x "$APP/Contents/MacOS/Titrate"

echo "==> Info.plist"
cp "$HERE/Info.plist" "$APP/Contents/Info.plist"

echo "==> Bundle web assets (only what index.html loads at runtime)"
cp "$REPO/index.html" "$APP/Contents/Resources/web/"
cp -R "$REPO/app"     "$APP/Contents/Resources/web/"
mkdir -p "$APP/Contents/Resources/web/data"
# Every data/*.js that index.html loads (deck, lessons, vignettes, disorders, tutorial,
# curriculum, reviews, glossary). The large data/deck.json is intentionally NOT bundled.
cp "$REPO"/data/*.js "$APP/Contents/Resources/web/data/"
rm -rf "$APP/Contents/Resources/web/app/docs"    # screenshots aren't needed inside the app

echo "==> Strip Finder metadata (else codesign refuses)"
find "$APP" -name '.DS_Store' -delete
xattr -cr "$APP"

echo "==> Ad-hoc code sign (required for Apple Silicon to launch it)"
codesign --force --deep --sign - "$APP"

echo "==> Package"
mkdir -p "$DIST"
rm -rf "$DIST/Titrate.app" "$DIST/Titrate-macOS.zip"
ditto "$APP" "$DIST/Titrate.app"                 # ditto copies a bundle cleanly (keeps the signature)
find "$DIST/Titrate.app" -name '.DS_Store' -delete
xattr -cr "$DIST/Titrate.app"                    # drop any Finder detritus the copy re-added
ditto -c -k --sequesterRsrc --keepParent "$DIST/Titrate.app" "$DIST/Titrate-macOS.zip"

echo "==> Verify"
codesign --verify --deep --strict --verbose=2 "$DIST/Titrate.app"

SIZE=$(du -sh "$DIST/Titrate.app" | cut -f1)
echo ""
echo "✅ Built  dist/Titrate.app  ($SIZE)"
echo "📦 Send   dist/Titrate-macOS.zip"
echo ""
echo "First launch on another Mac (unsigned app): right-click the app → Open → Open,"
echo "or run:  xattr -dr com.apple.quarantine /path/to/Titrate.app"
