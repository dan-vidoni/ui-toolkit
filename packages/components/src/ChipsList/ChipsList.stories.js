import React from 'react';
import { storiesOf } from '@storybook/react';
import WrapperPage from '../Showcase/WrapperPage';
import ChipsList from './ChipsList';
import { withKnobs, array } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf('Components', module)
    .addDecorator(withKnobs)
    .add('ChipsList', () => {
        const values = array('values', ['Spain', 'Italy', 'USA', 'France', 'Brazil'])
        return (
            <WrapperPage>
                <div>Where do you plan your next vacation?</div>
                <ChipsList values={values} onDelete={action('onDelete')} />
            </WrapperPage>
        )
    });