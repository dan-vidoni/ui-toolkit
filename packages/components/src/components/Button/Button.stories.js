import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import Button from './Button';
import { lightTheme, darkTheme } from '@demo-ui-toolkit/mui-themes'

const lightThemeExample = {
  themeName: 'Light Theme',
  ...lightTheme
};

const darkThemeExample = {
  themeName: 'Dark Theme',
  ...darkTheme
};

storiesOf('Button', module)
  .addDecorator(muiTheme([lightThemeExample, darkThemeExample]))
  .add('Button example', () => (
    <Button />
  ));