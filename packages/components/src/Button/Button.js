import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.dark,
        color: theme.palette.text.primary,
        padding: theme.spacing(1),
    }
}));

const Button = (props) => {
    const classes = useStyles();
    const { text } = props;
    return (
        <MuiButton classes={{ root: classes.root }}>
            {text}
        </MuiButton>
    );
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;