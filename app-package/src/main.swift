// main.swift — Titrate: a tiny, self-contained native macOS wrapper around the web app.
//
// Why native (not a browser/server): WebKit ships with every Mac, so there are no runtime
// dependencies — nothing to install, works offline. The bundled web assets are served through a
// custom URL scheme ("titrate://app/…") which gives the page a STABLE web origin; WKWebView's
// default (persistent) data store then keeps localStorage — the resident's streak/XP/learned
// meds — across launches. No localhost port, no firewall prompt, no file:// storage quirks.
//
// Built as a universal (arm64 + x86_64) binary and ad-hoc code-signed by make-app.sh.

import Cocoa
import WebKit

// MARK: - Serve the bundled web assets from Contents/Resources/web over titrate://
final class AppSchemeHandler: NSObject, WKURLSchemeHandler {
    let root: URL
    init(root: URL) { self.root = root.standardizedFileURL }

    private func mime(_ ext: String) -> String {
        switch ext.lowercased() {
        case "html", "htm": return "text/html; charset=utf-8"
        case "css":         return "text/css; charset=utf-8"
        case "js", "mjs":   return "text/javascript; charset=utf-8"
        case "json":        return "application/json; charset=utf-8"
        case "mp3":         return "audio/mpeg"
        case "wav":         return "audio/wav"
        case "woff2":       return "font/woff2"
        case "woff":        return "font/woff"
        case "ttf":         return "font/ttf"
        case "svg":         return "image/svg+xml"
        case "png":         return "image/png"
        case "jpg", "jpeg": return "image/jpeg"
        case "gif":         return "image/gif"
        case "ico":         return "image/x-icon"
        default:            return "application/octet-stream"
        }
    }

    func webView(_ webView: WKWebView, start task: WKURLSchemeTask) {
        guard let url = task.request.url else {
            task.didFailWithError(NSError(domain: "Titrate", code: 400)); return
        }
        var path = url.path
        if path.isEmpty || path == "/" { path = "/index.html" }
        let rel = path.hasPrefix("/") ? String(path.dropFirst()) : path
        let fileURL = root.appendingPathComponent(rel).standardizedFileURL

        // Never escape the web root.
        guard fileURL.path == root.path || fileURL.path.hasPrefix(root.path + "/"),
              let data = try? Data(contentsOf: fileURL) else {
            task.didFailWithError(NSError(domain: "Titrate", code: 404,
                userInfo: [NSLocalizedDescriptionKey: "Not found: \(rel)"])); return
        }

        let type = mime(fileURL.pathExtension)

        // Honour Range requests — <audio> playback via a custom scheme is flaky without it.
        if let rangeHeader = task.request.value(forHTTPHeaderField: "Range"),
           rangeHeader.hasPrefix("bytes=") {
            let total = data.count
            let spec = rangeHeader.dropFirst("bytes=".count)
            let parts = spec.split(separator: "-", maxSplits: 1, omittingEmptySubsequences: false)
            var start = 0
            var end = total - 1
            if parts.count >= 1, let s = Int(parts[0]) { start = s }
            if parts.count >= 2, !parts[1].isEmpty, let e = Int(parts[1]) { end = e }
            start = max(0, start)
            end = min(end, total - 1)
            if start > end { start = 0; end = total - 1 }
            let slice = data.subdata(in: start..<(end + 1))
            let headers = [
                "Content-Type": type,
                "Content-Length": String(slice.count),
                "Content-Range": "bytes \(start)-\(end)/\(total)",
                "Accept-Ranges": "bytes",
                "Cache-Control": "no-store",
            ]
            let resp = HTTPURLResponse(url: url, statusCode: 206, httpVersion: "HTTP/1.1", headerFields: headers)!
            task.didReceive(resp)
            task.didReceive(slice)
            task.didFinish()
            return
        }

        let headers = [
            "Content-Type": type,
            "Content-Length": String(data.count),
            "Accept-Ranges": "bytes",
            "Cache-Control": "no-store",
        ]
        let resp = HTTPURLResponse(url: url, statusCode: 200, httpVersion: "HTTP/1.1", headerFields: headers)!
        task.didReceive(resp)
        task.didReceive(data)
        task.didFinish()
    }

    func webView(_ webView: WKWebView, stop task: WKURLSchemeTask) {}
}

// MARK: - App
final class AppDelegate: NSObject, NSApplicationDelegate, WKNavigationDelegate {
    var window: NSWindow!
    var webView: WKWebView!

    func applicationDidFinishLaunching(_ note: Notification) {
        buildMenu()

        let webRoot = Bundle.main.resourceURL!.appendingPathComponent("web", isDirectory: true)
        let config = WKWebViewConfiguration()
        config.setURLSchemeHandler(AppSchemeHandler(root: webRoot), forURLScheme: "titrate")
        config.websiteDataStore = .default()                 // persistent: localStorage survives quits
        config.mediaTypesRequiringUserActionForPlayback = [] // let Neuro's narration play

        let frame = NSRect(x: 0, y: 0, width: 1180, height: 820)
        webView = WKWebView(frame: frame, configuration: config)
        webView.navigationDelegate = self
        webView.allowsBackForwardNavigationGestures = false

        window = NSWindow(contentRect: frame,
                          styleMask: [.titled, .closable, .miniaturizable, .resizable],
                          backing: .buffered, defer: false)
        window.title = "Titrate"
        window.minSize = NSSize(width: 380, height: 560)
        window.center()
        window.contentView = webView
        window.setFrameAutosaveName("TitrateMainWindow")     // remember window size/position
        window.makeKeyAndOrderFront(nil)

        webView.load(URLRequest(url: URL(string: "titrate://app/index.html")!))
        NSApp.activate(ignoringOtherApps: true)
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ app: NSApplication) -> Bool { true }

    // A minimal menu so ⌘Q, ⌘W, and copy/paste in text fields work.
    private func buildMenu() {
        let mainMenu = NSMenu()

        let appItem = NSMenuItem(); mainMenu.addItem(appItem)
        let appMenu = NSMenu()
        appItem.submenu = appMenu
        appMenu.addItem(withTitle: "About Titrate", action: #selector(NSApplication.orderFrontStandardAboutPanel(_:)), keyEquivalent: "")
        appMenu.addItem(.separator())
        appMenu.addItem(withTitle: "Hide Titrate", action: #selector(NSApplication.hide(_:)), keyEquivalent: "h")
        appMenu.addItem(withTitle: "Quit Titrate", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")

        let editItem = NSMenuItem(); mainMenu.addItem(editItem)
        let editMenu = NSMenu(title: "Edit")
        editItem.submenu = editMenu
        editMenu.addItem(withTitle: "Undo", action: Selector(("undo:")), keyEquivalent: "z")
        editMenu.addItem(withTitle: "Redo", action: Selector(("redo:")), keyEquivalent: "Z")
        editMenu.addItem(.separator())
        editMenu.addItem(withTitle: "Cut", action: #selector(NSText.cut(_:)), keyEquivalent: "x")
        editMenu.addItem(withTitle: "Copy", action: #selector(NSText.copy(_:)), keyEquivalent: "c")
        editMenu.addItem(withTitle: "Paste", action: #selector(NSText.paste(_:)), keyEquivalent: "v")
        editMenu.addItem(withTitle: "Select All", action: #selector(NSText.selectAll(_:)), keyEquivalent: "a")

        let windowItem = NSMenuItem(); mainMenu.addItem(windowItem)
        let windowMenu = NSMenu(title: "Window")
        windowItem.submenu = windowMenu
        windowMenu.addItem(withTitle: "Minimize", action: #selector(NSWindow.performMiniaturize(_:)), keyEquivalent: "m")
        windowMenu.addItem(withTitle: "Close", action: #selector(NSWindow.performClose(_:)), keyEquivalent: "w")
        NSApp.windowsMenu = windowMenu

        NSApp.mainMenu = mainMenu
    }
}

let app = NSApplication.shared
app.setActivationPolicy(.regular)
let delegate = AppDelegate()
app.delegate = delegate
app.run()
