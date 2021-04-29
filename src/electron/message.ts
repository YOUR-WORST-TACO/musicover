import {ipcMain} from "electron";
import {window} from "./window";

export const messageHandler = (window) => {
    ipcMain.on('ipc-reply', (_event, payload) => {
        const result = payload.success ? 'SUCCESS:' : 'FAILURE:';

        console.log(result + "Message from electron to React");
    });

    ipcMain.on('test-ipc-channel', (_event, payload) => {
        console.log(payload);
        window.webContents.send('ipc-reply', {
            message: 'SUCCESS:' + payload
        });
    });
}

export const sendMessage = () => {
    if (window) {
        window.webContents.send('test-ipc-channel', {
            message: 'Message from electron to React'
        });
    }
};
