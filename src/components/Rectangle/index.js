import React from 'react';
import { RectangleStyle } from './style';
import { Button } from '../../components/UI/Button/Button';
import { H3 } from '../../components/Headers/index';

import history from '../../history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const Rectangle = ({post}) => {

    return (
        <RectangleStyle key={post.id}>
            <RectangleStyle.Icon>
                <FontAwesomeIcon icon={faFolderOpen} />
            </RectangleStyle.Icon>
            <RectangleStyle.Header>
                <H3 width="70%">
                    <RectangleStyle.Link to={{ pathname: `/lessons/${post.title}`, search: `?id=${post.id}` }}>{post.title}</RectangleStyle.Link>
                </H3>
                <Button 
                    buttonColor="#07a9e4"
                    onClick={() => history.push({ pathname: `/lessons/${post.title}`, search: `?id=${post.id}` })}>Przejdź do lekcji</Button>
            </RectangleStyle.Header>
        </RectangleStyle>
    );
}

export default Rectangle;