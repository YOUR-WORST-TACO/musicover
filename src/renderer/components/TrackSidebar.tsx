import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    sidebar_root: {
        minHeight: "100%",
        background: '#ffff00',
    }
});

export const TrackSidebar = () => {

    const classes = useStyles();

    return (
        <Box className={classes.sidebar_root}>

        </Box>
    );
}
