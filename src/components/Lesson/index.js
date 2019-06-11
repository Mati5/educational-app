import React from 'react';
import history from '../../history';

import { LessonLayout } from './LessonLayout';
import { Icon } from './Icon';
import { Header } from './Header';
import { Button } from '../../components/UI/Button/Button';
import { H3 } from '../Headers';
import { LessonLink } from './Link';

const Lesson = (props) => {
    return(
        <LessonLayout>
            <Icon>
                <i className="fa fa-folder-open-o" aria-hidden="true"></i>
            </Icon>
            <Header>
                <H3>
                    <LessonLink to={{ pathname: `/lessons/${props.title}`, search: `?id=${props.id}` }}>{props.title}</LessonLink>
                </H3>
                <Button buttonColor="#07a9e4" onClick={() => history.push({ pathname: `/lessons/${props.title}`, search: `?id=${props.id}` })}>Przejdź do lekcji</Button>
            </Header>
        </LessonLayout>
    );
}

export default Lesson;