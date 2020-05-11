import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import MyThemedButton from './MyThemedButton';
import { lightTheme, darkTheme } from '@demo-ui-toolkit/mui-themes'

const lightThemeExample = {
    themeName: 'Light Theme',
    ...lightTheme
};

const darkThemeExample = {
    themeName: 'Dark Theme',
    ...darkTheme
};

storiesOf('MyThemedButton', module)
    .addDecorator(muiTheme([lightThemeExample, darkThemeExample]))
    .add('MyThemedButton example', () => (
        <MyThemedButton />
    ));