import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Box, Button, CssBaseline, Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useEffect, useState} from "react";

import {DeviceSidebar} from "./DeviceSidebar";
import {TrackSidebar} from "./TrackSidebar";
import {AlbumTile} from "./AlbumTile";
import {FolderTile} from "./FolderTile";
import {MessageExample} from "./MessageExample";
import {TitleBar} from "./TitleBar";

const useStyles = makeStyles({
    '@global': {
        body: {
            height: "100vh"
        },
        '#root': {
            height: "100%"
        }
    },
    root: {
        height: "100%"
    },
    app: {
        height: "100%",
        paddingTop: 32,
    },
});


export const App = () => {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <TitleBar title="MusicOver"/>
            <Grid container className={classes.app}>
                <CssBaseline/>
                <Grid item xs={6} sm={7} md={8}>
                    <DeviceSidebar/>
                    <MessageExample/>
                </Grid>
                <Grid item xs={6} sm={5} md={4}>
                    <TrackSidebar/>
                </Grid>
            </Grid>
        </Grid>
    )
};
