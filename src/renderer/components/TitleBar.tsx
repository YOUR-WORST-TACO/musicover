import * as React from "react";
import {makeStyles} from '@material-ui/core/styles';

const {ipcRenderer} = window.require('electron');

import {useEffect, useState} from "react";

import CloseIcon from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';
import MaximizeIcon from '@material-ui/icons/Fullscreen';
import RestoreIcon from '@material-ui/icons/FullscreenExit';

const useStyles = makeStyles({
    titleBar: {
        display: 'block',
        position: 'fixed',
        height: 32,
        width: '100%',
        background: '#121212',
        color: '#fff',
        padding: 0,
    },
    drag: {
        width: '100%',
        height: '100%',
        WebkitAppRegion: 'drag',
        display: 'grid',
        gridTemplateColumns: 'auto 138px',
    },
    windowTitle: {
        gridColumn: 1,
        display: 'flex',
        alignItems: 'center',
        marginLeft: 8,
        overflow: 'hidden',
        fontFamily: '"Segoe UI", sans-serif',
        fontSize: 12
    },
    windowTitleSpan: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        lineHeight: 1.5,
    },
    windowControls: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 46px)',
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        WebkitAppRegion: 'no-drag',
    },
    button: {
        gridRow: '1 / span 1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        userSelect: 'none',
        WebkitTransition: 'background 0.1s ease',
        '&:hover': {
            background: 'rgba(255,255,255,0.1)'
        },
        '&:active': {
            background: 'rgba(255,255,255,0.2)'
        }
    },
    minButton: {
        gridColumn: 1,
    },
    maxButton: {
        gridColumn: 2,
    },
    restoreButton: {
        gridColumn: 2,
    },
    closeButton: {
        gridColumn: 3,
        '&:hover': {
            background: '#E81123'
        },
        '&:active': {
            background: '#F1707A',
        },
    },
});

export const TitleBar = (props) => {

    const classes = useStyles();

    const [maximized, setMaximized] = useState(false);

    const minimizeHandler = () => {
        ipcRenderer.send('window-control-event', {event: 'minimize'});
    };

    const maximizeHandler = () => {
        ipcRenderer.send('window-control-event', {event: 'maximize'});
    };

    const restoreHandler = () => {
        ipcRenderer.send('window-control-event', {event: 'restore'});
    };

    const closeHandler = () => {
        ipcRenderer.send('window-control-event', {event: 'close'});
    };

    const maximizeEventHandler = (_event, response) => {
        setMaximized(response.maximized);
    };

    useEffect(() => {
        ipcRenderer.on('maximize-event', maximizeEventHandler);
    });

    return (
        <header className={classes.titleBar}>
            <div className={classes.drag}>
                <div className={classes.windowTitle}>
                    <span className={classes.windowTitleSpan}>{props.title}</span>
                </div>
                <div className={classes.windowControls}>
                    <div className={`${classes.button} ${classes.minButton}`} onClick={minimizeHandler}>
                        <MinimizeIcon fontSize="small"/>
                    </div>

                    {!maximized
                        ? <div className={`${classes.button} ${classes.maxButton}`} onClick={maximizeHandler}>
                            <MaximizeIcon fontSize="small"/>
                        </div>

                        : <div className={`${classes.button} ${classes.restoreButton}`} onClick={restoreHandler}>
                            <RestoreIcon fontSize="small"/>
                        </div>
                    }

                    <div className={`${classes.button} ${classes.closeButton}`} onClick={closeHandler}>
                        <CloseIcon fontSize="small"/>
                    </div>
                </div>
            </div>
        </header>
    );
}
