import React from 'react';
import Button from '../Button/Button';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
    }
}));

const MyThemedButton = () => {
    const classes = useStyles();
    return (
        <Button classes={{root: classes.root}}>
            themed
        </Button>
    );
}

export default MyThemedButton;