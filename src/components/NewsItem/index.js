import React from 'react';

import { NewsItemLayout } from './NewsItemLayout';
import { Thumbnail } from './Thumbnail';
import { NewsItemContent } from './NewsItemContent'; 
import { H3 } from '../Headers'; 

import thumbnail from '../../assets/images/thumbnails/art1.png';

const NewsItem = () => (
    <NewsItemLayout>
        <Thumbnail>
            <img src={thumbnail} alt="" />
        </Thumbnail>
        <NewsItemContent>
            <H3>Podstawowe pojęcia związane z tworzeniem stron internetowych</H3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus laboriosam labore, hic magni enim ducimus eveniet molestiae porro desbitis maiores voluptatibus sint itaque. Dolores placeat, exercitationem qui neque eligendi tempore excepturi ut. Maiores voluptatibus, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus laboriosam labore, hic magni enim ducimus eveniet molestiae porro debitis maiores voluptatibus sint.</p>
        </NewsItemContent>
    </NewsItemLayout>
);

export default NewsItem;