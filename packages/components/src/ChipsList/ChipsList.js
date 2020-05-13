import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    chip: {
        margin: theme.spacing(0.5),
        borderRadius: theme.spacing(1),
        background: theme.palette.secondary.dark,
        color: "#fff"
    },
}));

const ChipsList = (props) => {
    const classes = useStyles();
    const { values, onDelete } = props;
    const [chipsList, setChipsList] = React.useState(values);

    const handleDelete = (chipToDelete) => () => {
        setChipsList((chips) => {
            const updatedList = chips.filter((chip) => chip !== chipToDelete)
            onDelete && onDelete(updatedList)
            return updatedList
        });
    };

    return (
        <>
            {chipsList.map((chip, index) => {
                return (
                    <Chip
                        key={index}
                        label={chip}
                        onDelete={handleDelete(chip)}
                        className={classes.chip}
                    />
                );
            })}
        </>
    );
}

ChipsList.propTypes = {
    values: PropTypes.array,
    onDelete: PropTypes.func
}

export default ChipsList
