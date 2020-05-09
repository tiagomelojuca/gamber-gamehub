const { app, BrowserWindow, ipcMain } = require('electron');
const { spawn } = require('child_process');
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
function getFileInfo(inputPath, searchedInfo) {
    const pathIn = inputPath;
    const fileIn = path.basename(pathIn);
    const pathWithoutFileName = pathIn.slice(0, -fileIn.length);
    
    if(searchedInfo === 'folder') {
        return pathWithoutFileName;
    }

    if(searchedInfo === 'filename') {
        return fileIn;
    }

    return 1;
}

function launchGame(path) {

    const gameFolder = getFileInfo(path, 'folder');
    const gameFileName = getFileInfo(path, 'filename');
    const command = `cd ${gameFolder} && start ${gameFileName}`;

    const cmdInput = spawn('cmd.exe', ['/c', command]);

    cmdInput.on('exit', (code) => {
        return code;
    });

    return 0;

}

ipcMain.on('execGame', (event, executablePath) => {
    launchGame(executablePath);
    if(quitWhenGameLaunchs) {
        app.quit();
    }
});