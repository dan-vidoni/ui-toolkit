import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, files } from "@storybook/addon-knobs";
import Card from './Card';

import personPhoto from '../../../public/m7.png'

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add('Person Card Example', () => {
        const titleText = text("title", "Max Tucson");
        const subtitleText = text("subtitle", "Barcelona");
        // const personPhotoFiles = files("photo", personPhoto)

        return (
            <Card
                title={titleText}
                subtitle={subtitleText}
                photo={personPhoto} />
        );
    });
