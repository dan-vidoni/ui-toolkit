import React from 'react';
import { Grid } from '@material-ui/core';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from "@storybook/addon-knobs";
import Card from './Card';

import personPhoto from '../../public/card3.jpg'

storiesOf('Components', module)
    .addDecorator(withKnobs)
    .add('Card', () => {
        const titleText = text("title", "Sunny day");
        const subtitleText = text("subtitle", "Maldive");

        return (
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card
                        title={titleText}
                        subtitle={subtitleText}
                        photo={personPhoto} />
                </Grid>
            </Grid>

        );
    });
