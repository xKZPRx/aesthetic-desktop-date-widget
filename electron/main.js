import { app, BrowserWindow } from "electron";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
    const win = new BrowserWindow({
        frame: false,
        transparent: true,
        width: 387,
        height: 387,
        resizable: false,
        autoHideMenuBar: true,
        alwaysOnTop: true,
        icon: path.join(__dirname, "../assets/icon.ico"),
    });

    win.loadURL("http://localhost:5173");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});