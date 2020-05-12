import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import WrapperPage from '../Showcase/WrapperPage';

storiesOf('Components', module)
  .add('Button', () => (
    <WrapperPage>
      <Button text="Themed button" />
    </WrapperPage>
  ));