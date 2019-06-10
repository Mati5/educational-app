import React from 'react';
import { Link } from 'react-router-dom';

import { LessonLayout } from './LessonLayout';
import { Icon } from './Icon';
import { Header } from './Header';
import { Button } from '../../components/UI/Button/Button';
import { H3 } from '../Headers/Headers';

const Lesson = (props) => {
    return(
        <LessonLayout>
            <Icon>
                <i className="fa fa-folder-open-o" aria-hidden="true"></i>
            </Icon>
            <Header>
                <H3>
                    <Link to={{ pathname: `/lessons/${props.title}`, search: `?id=${props.id}` }}>{props.title}</Link>
                </H3>
                <Button buttonColor="#07a9e4">Przejdź do lekcji</Button>
            </Header>
        </LessonLayout>
    );
}

export default Lesson;