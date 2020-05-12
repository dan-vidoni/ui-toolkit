import React from 'react'
import PropTypes from 'prop-types'
import { Card as MatUiCard } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import styles from './Card.styles'

const Card = (props) => {
    const {
        classes, photo, title, subtitle, defaultDisplay,
    } = props

    const displayTitle = (text) => {
        if (!text) {
            return null
        }
        return <div className={classes.title}>{text}</div>
    }

    const displaySubtitle = (text) => {
        if (!text) {
            return null
        }
        return <div className={classes.subtitle}>{text}</div>
    }

    const renderBackgroundImage = () => {
        if (!photo) {
            return null
        }
        return <div className={classes.image} />
    }

    const displayCardContent = () => (
        <>
            {renderBackgroundImage()}
        </>
    )

    return (
        <MatUiCard className={classes.card}>
            {displayCardContent()}
            <div className={classes.bottomInfo}>
                {displayTitle(title, classes)}
                {displaySubtitle(subtitle, classes)}
            </div>
        </MatUiCard>
    )
}

Card.propTypes = {
    tile: PropTypes.string,
    subtitle: PropTypes.string,
    linkTo: PropTypes.string,
    photo: PropTypes.any,
    defaultDisplay: PropTypes.string
}


export default withStyles(styles())(Card)
