import {ipcMain} from "electron";
import {remote} from 'electron';

export const messageHandler = (win) => {
    ipcMain.on('ipc-reply', (_event, payload) => {
        const result = payload.success ? 'SUCCESS:' : 'FAILURE:';

        console.log(result + "Message from main to React");
    });

    ipcMain.on('test-ipc-channel', (_event, payload) => {
        console.log(payload);
        win.webContents.openDevTools()
        win.webContents.send('ipc-reply', {
            message: 'SUCCESS:' + payload
        });
    });

    ipcMain.on('window-control-event', (_event, payload) => {
        switch (payload.event) {
            case 'minimize':
                win.minimize();
                break;
            case 'maximize':
                win.maximize();
                break;
            case 'restore':
                win.unmaximize();
                break;
            case 'close':
                win.close();
                break;
            default:
                break;
        }
    })
}

export const sendMessage = () => {
    const win = remote.getCurrentWindow();
    if (win) {
        win.webContents.send('test-ipc-channel', {
            message: 'Message from main to React'
        });
    }
};
