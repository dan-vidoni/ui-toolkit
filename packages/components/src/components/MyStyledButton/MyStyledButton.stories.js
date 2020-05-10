import React from 'react';
import MyStyledButton from './MyStyledButton';

export default { title: 'MyStyledButton' };

export const hello = () => (<MyStyledButton />);

export const disabled = () => (<MyStyledButton disabled/>);