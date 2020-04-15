const { app, BrowserWindow, ipcMain } = require('electron');
const child = require('child_process').execFile;
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        icon: __dirname + '/assets/gamepad.ico',
        width: 400,
        height: 600,
        minWidth: 400,
        minHeight: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// ipcMain
ipcMain.on('execGame', (event, executablePath) => {
    child(executablePath);
});