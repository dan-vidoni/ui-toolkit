import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from "@storybook/addon-knobs";
import Label from './Label';
import WrapperPage from '../Showcase/WrapperPage';

storiesOf('Components', module)
    .addDecorator(withKnobs)
    .add('Label', () => {
        const labelText = text("text", "Label");

        return (
            <WrapperPage>
                <Label text={labelText} />
            </WrapperPage>
        );
    });
