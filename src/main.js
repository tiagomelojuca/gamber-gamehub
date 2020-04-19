const { app, BrowserWindow, ipcMain } = require('electron');
const child = require('child_process').execFile;
const path = require('path');

// User config
const jsonConfig = require('./config.json');
var { userWidth, userHeight, quitWhenGameLaunchs } = jsonConfig;

// Electron
if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {

    const mainWindow = new BrowserWindow({
        icon: __dirname + '/assets/gamepad.ico',
        width: userWidth,
        height: userHeight,
        minWidth: userWidth,
        minHeight: userHeight,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', createWindow);

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

// ipcMain Events
ipcMain.on('execGame', (event, executablePath) => {
    child(executablePath, (error) => {
        if(error) {
            event.reply('invalidPath');
            return;
        }
        if(quitWhenGameLaunchs) {
            app.quit();
        }
    });
});