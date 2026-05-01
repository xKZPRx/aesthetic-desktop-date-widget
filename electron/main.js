import { app, BrowserWindow } from "electron";

function createWindow() {
    const win = new BrowserWindow({
        width: 377,
        height: 377,
        resizable: false,
        autoHideMenuBar: true,
    });

    win.loadURL("http://localhost:5173");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});