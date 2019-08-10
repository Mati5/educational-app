import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button } from '../components/UI/Button/Button';

const button = 
    <Button buttonColor="#07a9e4">Przejdź do lekcji</Button>
;

storiesOf('Buttons', module)
  .add('default', () => button)

