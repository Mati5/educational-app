import React from 'react';

import { storiesOf } from '@storybook/react';

import { H1, H2, H3 } from '../components/Headers/index';



storiesOf('Headers', module)
    .add('H1', () => <H1>Title 1</H1>)
    .add('H2', () => <H2>Title 2</H2>)
    .add('H3', () => <H3>Title 3</H3>)

