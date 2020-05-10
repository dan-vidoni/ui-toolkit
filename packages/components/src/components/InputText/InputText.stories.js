import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import InputText from './InputText';

storiesOf('InputText', module)
    .addDecorator(withKnobs)
    .add('InputTextExample', () => {
        const labelText = text("label", "Label");
        const placeholderText = text("placeholder", "Placeholder");
        const defaultValueText = text("defaultValue", "Hello");

        return (
            <InputText
                label={labelText}
                placeholder={placeholderText}
                defaultValue={defaultValueText}
                onChange={action("onChange")}
                onEnter={action("onEnter")} />
        );
    });
