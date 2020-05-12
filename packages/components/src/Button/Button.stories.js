import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import WrapperPage from '../Showcase/WrapperPage';

storiesOf('Button', module)
  .add('Button example', () => (
    <WrapperPage>
      <Button text="Themed button" />
    </WrapperPage>
  ));