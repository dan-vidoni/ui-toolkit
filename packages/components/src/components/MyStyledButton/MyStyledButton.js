import React from 'react';
import Button from '../Button/Button';
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
      background: '#FF8E53',
      border: 0,
      borderRadius: 3,
      color: 'white',
      '&$disabled': {
        color: 'gray',
      },
    },
    disabled: {
        background: 'lightgray'
    }
};

const MyStyledButton = ({classes, ...rest}) => {
    return (
        <Button classes={{root: classes.root, disabled: classes.disabled}} {...rest}>
            hello
        </Button>
    );
}

export default withStyles(styles)(MyStyledButton);