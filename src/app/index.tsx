import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box, Button, CssBaseline, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//import { ipcRenderer } from 'electron';

const { ipcRenderer } = window.require('electron');

import { DeviceSidebar } from "./components/DeviceSidebar";
import { TrackSidebar } from "./components/TrackSidebar";
import { AlbumTile } from "./components/AlbumTile";
import { FolderTile } from "./components/FolderTile";
import {useEffect, useState} from "react";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    button_colored: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
});

interface Response {
    [message: string]: string;
}

const ResponseObj = () => {
    const [message, setMessage] = useState('');

    const handleResponse = (_event: any, response: Response) => {
        setMessage(response.message);
    }

    useEffect((): any => {
        ipcRenderer.on('my-ipc-channel', handleResponse);

        return () => ipcRenderer.off('my-ipc-channel', handleResponse);
    }, []);

    return <>{message}</>
}

const Index = () => {
    const classes = useStyles();

    return(
        <Grid container component="main">
            <CssBaseline />
            <ResponseObj />
            <Grid item xs={6} sm={7} md={8}>
                <DeviceSidebar />
                <Button className={classes.button_colored}>Test Button</Button>
            </Grid>
            <Grid item xs={6} sm={5} md={4}>
                <TrackSidebar />
            </Grid>
        </Grid>
    )
};

ReactDOM.render(<Index />, document.getElementById('app'));
