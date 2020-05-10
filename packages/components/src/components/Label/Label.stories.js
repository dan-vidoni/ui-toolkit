import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from "@storybook/addon-knobs";
import Label from './Label';

storiesOf('Label', module)
    .addDecorator(withKnobs)
    .add('LabelExample', () => {
        const labelText = text("text", "Label");

        return (
            <Label text={labelText} />
        );
    });
