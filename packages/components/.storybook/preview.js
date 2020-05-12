import { lightTheme, darkTheme } from '@demo-ui-toolkit/mui-themes';
import { addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

const lightThemeExample = {
    themeName: 'Light Theme',
    ...lightTheme
};

const darkThemeExample = {
    themeName: 'Dark Theme',
    ...darkTheme
};
addDecorator(muiTheme([lightThemeExample, darkThemeExample]));

