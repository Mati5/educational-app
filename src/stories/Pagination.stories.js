import React from 'react';
import { Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Pagination from '../components/Navigation/Pagination/index';
import history from '../history';

storiesOf('Paginations', module)
    .addDecorator(storyFn => <Router history={history}><div style={{ width: '90%' }}>{storyFn()}</div></Router>)
    .add('lessons', () => <Pagination postsPerPage={5} totalPosts={25} currentPage={parseInt(1)} />)


