import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
    }
}));

const ExamplePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            themed
        </div>
    );
}

export default ExamplePage;