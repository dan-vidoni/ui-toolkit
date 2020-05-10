import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import styles from './InputText.styles'
import Label from '../Label/Label'

class InputText extends Component {
    handleChange = (event) => {
        const { onChange } = this.props
        if (onChange) {
            onChange(event)
        }
    };

    handleEnter = (event) => {
        const { onEnter } = this.props
        if (event.key === 'Enter' && onEnter) {
            onEnter(event)
        }
    };

    displayLabel = () => {
        const { label } = this.props
        if (!label) {
            return null
        }

        return <Label text={label} />
    };

    render() {
        const {
            classes, defaultValue, placeholder
        } = this.props
        return (
            <div className={classes.root}>
                {this.displayLabel()}
                <TextField
                    className={classes.textField}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    variant="outlined"
                    onChange={this.handleChange}
                    onKeyPress={this.handleEnter}
                />
            </div>
        )
    }
}

InputText.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onEnter: PropTypes.func
}

export default withStyles(styles())(InputText)
