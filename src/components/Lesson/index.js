import React from 'react';
import { LessonStyle } from './style';
import Moment from 'react-moment';
import { DATE_FORMAT } from '../../shared/config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
 
const Lesson = ({post, sidebarOpened, children}) => {

    return (
        <LessonStyle sidebarOpened={sidebarOpened}>
            <LessonStyle.Header>
                    <LessonStyle.Title>{post.title}</LessonStyle.Title>
                    <LessonStyle.Details>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <LessonStyle.Details.Date>
                            <Moment date={post.date} 
                                    format={DATE_FORMAT} />
                        </LessonStyle.Details.Date>
                    </LessonStyle.Details>
                </LessonStyle.Header>
                <LessonStyle.Content dangerouslySetInnerHTML={{__html: post.content}} />
                {children}
        </LessonStyle>
    );
};

export default Lesson;