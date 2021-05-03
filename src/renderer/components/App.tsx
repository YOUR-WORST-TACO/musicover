// TODO clean up imports to save space

import * as React from 'react';
import * as ReactDOM from 'react-dom';

//import {Box, Button, CssBaseline, Grid, Paper} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {makeStyles} from '@material-ui/core/styles';
import {useEffect, useState} from "react";

import {DeviceSidebar} from "./DeviceSidebar";
import {TrackSidebar} from "./TrackSidebar";
import {AlbumTile} from "./AlbumTile";
import {FolderTile} from "./FolderTile";
import {MessageExample} from "./MessageExample";
import {TitleBar} from "./TitleBar";

import {getDirectoryContents} from '../helpers/testFileLoader';

/*(async () => {
        console.log(await getDirectoryContents());
    })();*/

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
                    {/*<MessageExample/>*/}
                </Grid>
                <Grid item xs={6} sm={5} md={4}>
                    <TrackSidebar/>
                </Grid>
            </Grid>
        </Grid>
    )
};
