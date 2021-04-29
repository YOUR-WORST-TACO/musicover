import {BrowserWindow, Menu} from "electron";
import {messageHandler, sendMessage} from "./message";

export let window;

export const createWindow = () => {
    // Create the browser window.
    window = new BrowserWindow({
        width: 1200,
        height: 900,
        minHeight: 700,
        minWidth: 1000,
        webPreferences: {
            //devTools: false, // disable shift + ctrl + i
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    // and load the index.html of the app.
    window.loadFile('index.html').catch( e => {
        console.log(e);
    });



    const menuTemplate = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Action',
                    click: sendMessage,
                    accelerator: 'CmdOrCtrl+A'
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    messageHandler(window);
}
