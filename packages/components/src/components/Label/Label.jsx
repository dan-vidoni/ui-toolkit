import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import style from './Label.styles'

const Label = (props) => {
    const { text, classes } = props
    return <div className={classes.label}>{text}</div>
}

Label.propTypes = {
    text: PropTypes.string.isRequired,
}

Label.defaultProps = {}

export default withStyles(style)(Label)
