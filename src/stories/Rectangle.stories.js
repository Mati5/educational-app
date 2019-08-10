import React from 'react';

import { storiesOf } from '@storybook/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { Rectangle } from '../components/Rectangle/index';
import { Button } from '../components/UI/Button/Button';
import { H3 } from '../components/Headers/index';

const rectangle = 
<Rectangle>
  <Rectangle.Icon>
      <FontAwesomeIcon icon={faFolderOpen} />
  </Rectangle.Icon>
  <Rectangle.Header>
      <H3 width="70%">
          <Rectangle.Link as="a">Lekcja</Rectangle.Link>
      </H3>
      <Button 
          buttonColor="#07a9e4">Przejdź do lekcji</Button>
  </Rectangle.Header>
</Rectangle>;

storiesOf('Rectangle', module)
  .addDecorator(storyFn => <div style={{ width: '70%' }}>{storyFn()}</div>)
  .add('default', () => rectangle)

