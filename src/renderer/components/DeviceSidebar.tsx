import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    sidebar_root: {
        minHeight: "100%",
        minWidth: "250px",
        width: "250px",
        float: 'left',
        background: '#ff0000'
    }
});

export const DeviceSidebar = () => {

    const classes = useStyles();

    return (
        <Box className={classes.sidebar_root}>

        </Box>
    );
};
