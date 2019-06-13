import React from 'react';

import { Container } from '../../components/Container/Container';
import { H2 } from '../../components/Headers';
import NewsItem from '../../components/NewsItem/index';

const News = () => (
    <React.Fragment>
        <Container>
            <H2>Aktualności</H2>
            <NewsItem />
        </Container>
    </React.Fragment>
);

export default News;