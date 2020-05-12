import React from 'react';
import MuiButton from '@material-ui/core/Button';
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