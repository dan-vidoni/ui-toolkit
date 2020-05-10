import React from 'react';
import Button from '../Button/Button';
import { withStyles } from '@material-ui/core/styles'

const styles = {
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
    },
};

const MyButton = (props) => {
    const { classes } = props;
    return (<Button className={classes.button} variant="contained" disabled>
        hello
    </Button>);
}

export default withStyles(styles)(MyButton);