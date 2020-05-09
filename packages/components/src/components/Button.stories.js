import React from 'react';
import Button from '@material-ui/core/Button';

export default { title: 'Button' };

export const secondary = () => (
  <Button variant="contained" color="secondary">
    Secondary
  </Button>
);

export const primary = () => (
  <Button variant="contained" color="primary">
    Primary
  </Button>
);