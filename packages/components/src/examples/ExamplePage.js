import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '../components/Button/Button';

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
        height: "600px"
    }
}));

const ExamplePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button></Button>
        </div>
    );
}

export default ExamplePage;