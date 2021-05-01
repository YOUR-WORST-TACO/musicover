import {app, BrowserWindow, ipcMain, Menu} from 'electron';
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

import {messageHandler} from "./message";
import {db} from './helpers';
import {isDev} from "./helpers/devHandler";

// initialize electron remote
require('@electron/remote/main').initialize();

// expose db to renderer
(<any>global).sharedVariable = {db: db};

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

const createWindow = () => {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1200,
        height: 900,
        minHeight: 700,
        minWidth: 1000,
        title: "MusicOver",
        frame: false,
        webPreferences: {
            devTools: true, // disable shift + ctrl + i
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            preload: MAIN_WINDOW_WEBPACK_ENTRY,
        }
    });

    win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY).catch(e => {
        console.error(e.message);
    });

    win.on('maximize', () => {
        win.webContents.send('maximize-event', {maximized: true});
    })

    win.on('unmaximize', () => {
        win.webContents.send('maximize-event', {maximized: false});
    })

    win.removeMenu();

    if (isDev()) {
        win.webContents.openDevTools();
    }

    messageHandler(win);
}

app.on('ready', createWindow);
