import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
        height: "600px"
    }
}));

const WrapperPage = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.children}
        </div>
    );
}

export default WrapperPage;