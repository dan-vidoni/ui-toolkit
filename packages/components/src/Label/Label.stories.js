import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from "@storybook/addon-knobs";
import Label from './Label';
import WrapperPage from '../Showcase/WrapperPage';

storiesOf('Label', module)
    .addDecorator(withKnobs)
    .add('Label Example', () => {
        const labelText = text("text", "Label");

        return (
            <WrapperPage>
                <Label text={labelText} />
            </WrapperPage>
        );
    });
