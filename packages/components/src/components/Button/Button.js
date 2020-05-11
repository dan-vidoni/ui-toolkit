import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
    }
}));

const Button = () => {
    const classes = useStyles();
    return (
        <MuiButton classes={{ root: classes.root }}>
            themed
        </MuiButton>
    );
}

export default Button;