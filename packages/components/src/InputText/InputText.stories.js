import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import InputText from './InputText';
import WrapperPage from '../Showcase/WrapperPage';

storiesOf('Components', module)
    .addDecorator(withKnobs)
    .add('InputText', () => {
        const labelText = text("label", "Label");
        const placeholderText = text("placeholder", "Placeholder");

        return (
            <WrapperPage>
                <InputText
                    label={labelText}
                    placeholder={placeholderText}
                    defaultValue={"Hello"}
                    onChange={action("onChange")}
                    onEnter={action("onEnter")} />
            </WrapperPage>
        );
    });
