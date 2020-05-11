import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import ExamplePage from './ExamplePage';
import { lightTheme, darkTheme } from '@demo-ui-toolkit/mui-themes'

const lightThemeExample = {
    themeName: 'Light Theme',
    ...lightTheme,
    ...{
        background: {
            paper: "#000",
            default: "#000"
        }
    }
};

const darkThemeExample = {
    themeName: 'Dark Theme',
    ...darkTheme
};

storiesOf('Example page', module)
    .addDecorator(muiTheme([lightThemeExample, darkThemeExample]))
    .add('First page', () => (
        <ExamplePage />
    ));