import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from "@storybook/addon-knobs";
import Card from './Card';

import personPhoto from '../../public/card3.jpg'

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add('Card Example', () => {
        const titleText = text("title", "Sunny day");
        const subtitleText = text("subtitle", "Maldive");

        return (
            <Card
                title={titleText}
                subtitle={subtitleText}
                photo={personPhoto} />
        );
    });
