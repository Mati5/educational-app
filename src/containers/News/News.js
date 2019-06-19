import React from 'react';

import { AppContainer } from '../../components/AppContainer/AppContainer';
import { H2 } from '../../components/Headers';
import NewsItem from '../../components/NewsItem/index';

const News = () => (
    <React.Fragment>
        <AppContainer>
            <H2>Aktualności</H2>
            <NewsItem />
        </AppContainer>
    </React.Fragment>
);

export default News;