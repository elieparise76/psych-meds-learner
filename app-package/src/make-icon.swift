// make-icon.swift — render the Titrate app icon: a purple rounded square with a white ψ.
// Usage: swift make-icon.swift <output.png> [size]   (default 1024)
import AppKit

let outPath = CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : "icon.png"
let size = CommandLine.arguments.count > 2 ? (Double(CommandLine.arguments[2]) ?? 1024) : 1024

let px = CGFloat(size)
let image = NSImage(size: NSSize(width: px, height: px))
image.lockFocus()

// Rounded-square background (macOS "squircle"-ish), Titrate violet #6d4bd6 with a soft top sheen.
let rect = NSRect(x: 0, y: 0, width: px, height: px)
let radius = px * 0.225
let bg = NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius)
bg.addClip()

let grad = NSGradient(colors: [
    NSColor(srgbRed: 0x7d/255.0, green: 0x5a/255.0, blue: 0xe6/255.0, alpha: 1),   // lighter top
    NSColor(srgbRed: 0x6d/255.0, green: 0x4b/255.0, blue: 0xd6/255.0, alpha: 1),   // base
    NSColor(srgbRed: 0x58/255.0, green: 0x36/255.0, blue: 0xbb/255.0, alpha: 1),   // deeper bottom
])!
grad.draw(in: rect, angle: -90)

// White ψ, centred (nudged for the glyph's descender).
let glyph = "ψ"
let font = NSFont.systemFont(ofSize: px * 0.60, weight: .semibold)
let para = NSMutableParagraphStyle(); para.alignment = .center
let attrs: [NSAttributedString.Key: Any] = [
    .font: font,
    .foregroundColor: NSColor.white,
    .paragraphStyle: para,
]
let str = NSAttributedString(string: glyph, attributes: attrs)
let gs = str.size()
let drawRect = NSRect(x: (px - gs.width) / 2,
                      y: (px - gs.height) / 2 - px * 0.015,
                      width: gs.width, height: gs.height)
str.draw(in: drawRect)

image.unlockFocus()

guard let tiff = image.tiffRepresentation,
      let rep = NSBitmapImageRep(data: tiff),
      let png = rep.representation(using: .png, properties: [:]) else {
    FileHandle.standardError.write("failed to render icon\n".data(using: .utf8)!)
    exit(1)
}
try! png.write(to: URL(fileURLWithPath: outPath))
print("wrote \(outPath) (\(Int(px))px)")
