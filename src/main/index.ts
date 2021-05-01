import {app, BrowserWindow, ipcMain, Menu} from 'electron';
import {messageHandler} from "./message";
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

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
            preload: MAIN_WINDOW_WEBPACK_ENTRY,
        }
    });

    // and load the index.html of the renderer.
    /*if (!process.env.NODE_ENV || process.env.NODE_ENV == "development") {
        win.loadURL('http://localhost:3000')
    } else {
        win.loadFile('index.html').catch(e => {
            console.log(e);
        });
    }*/
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

    win.webContents.openDevTools();

    messageHandler(win);

}

app.on('ready', createWindow);
