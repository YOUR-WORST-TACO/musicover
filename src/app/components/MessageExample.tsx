import * as React from 'react';
import {useEffect, useState} from "react";
import {Button} from "@material-ui/core";

const { ipcRenderer } = window.require('electron');

interface Response {
    [message: string]: string;
}

export const MessageExample = () => {
    const [buttonMessage, setButtonMessage] = useState('');
    const [serverMessage, setServerMessage] = useState('');

    const handleServerResponse = (_event: any, response: Response) => {
        setServerMessage(response.message);
        _event.sender.send('ipc-reply', { success: true });
    }

    const handleButtonResponse = (_event: any, response: Response) => {
        setButtonMessage(response.message);
    }

    const buttonPress = () => {
        ipcRenderer.send("test-ipc-channel", {success: true});
    }

    useEffect(():any => {
        ipcRenderer.on('ipc-reply', handleButtonResponse);
        ipcRenderer.on('test-ipc-channel', handleServerResponse);
    })

    return (
        <div>
            <Button onClick={buttonPress}>Test IPC</Button>
            <br/>
            <>{buttonMessage}</>
            <br/>
            <>{serverMessage}</>
        </div>
    )
}
