import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box, Button, CssBaseline, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DeviceSidebar } from "./DeviceSidebar";
import { TrackSidebar } from "./TrackSidebar";
import { AlbumTile } from "./AlbumTile";
import { FolderTile } from "./FolderTile";
import {useEffect, useState} from "react";
import {MessageExample} from "./MessageExample";

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


export const App = () => {
    const classes = useStyles();

    return(
        <Grid container component="main">
            <CssBaseline />
            <Grid item xs={6} sm={7} md={8}>
                <DeviceSidebar />
                <Button className={classes.button_colored} >Test Button</Button>
                <br/>
                <MessageExample />
            </Grid>
            <Grid item xs={6} sm={5} md={4}>
                <TrackSidebar />
            </Grid>
        </Grid>
    )
};


