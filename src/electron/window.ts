import {BrowserWindow, Menu} from "electron";
import {messageHandler, sendMessage} from "./message";
import * as path from "path";

let win;
export const createWindow = () => {
    // Create the browser window.
    win = new BrowserWindow({
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
        }
    });

    // and load the index.html of the app.
    win.loadFile('index.html').catch(e => {
        console.log(e);
    });

    win.on('maximize', () => {
        win.webContents.send('maximize-event', {maximized: true});
    })

    win.on('unmaximize', () => {
        win.webContents.send('maximize-event', {maximized: false});
    })

    win.removeMenu();

    messageHandler(win);

}
