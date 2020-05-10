import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: 'green',
    },
};

class CustomComponent extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <p>Title</p>
                <div>Description</div>
            </div>
        )
    }
}

export default withStyles(styles)(CustomComponent)
