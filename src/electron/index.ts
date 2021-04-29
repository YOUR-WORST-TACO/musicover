import { app, BrowserWindow, ipcMain, Menu } from 'electron';

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
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
    win.loadFile('index.html').catch( e => {
        console.log(e);
    });

    const sendMessage = () => {
        if (win) {
            win.webContents.send('my-ipc-channel', {
                message: 'Message communicated from the main process!'
            });
        }
    };

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
}

app.on('ready', createWindow);
