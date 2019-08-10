import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { DATE_FORMAT } from '../../shared/config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import LinearProgress from '@material-ui/core/LinearProgress';

import { getSingleLesson, setSelectedLesson } from '../../store/Lessons/actions';
import LessonList from './LessonList';
import { Lesson } from '../../components/Lesson/index';
import { ToggleButton } from '../../components/Navigation/ToggleButton/index';
import { Attachment } from '../../components/Attachment/index';


const SingleLesson = ({getSingleLesson, setSelectedLesson, selectedLesson, location}) => {
    let [showSidebar, setSidebarOpened] = useState(true);
    
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        getSingleLesson(params.get('id'));
        return () => {
            setSelectedLesson(null);
        }
    }, [getSingleLesson, setSelectedLesson, location]);

    const checkWidth = () => {
        if(window.innerWidth < 768) {
            setSidebarOpened(false);
        }
        else {
            setSidebarOpened(true);
        }
    }

    useEffect(()=> {
        checkWidth();
        window.addEventListener('resize', checkWidth);

        return() => {
            window.removeEventListener('resize', checkWidth);
        }
    }, []);

    let lesson = <LinearProgress />;
    if(selectedLesson) {
        lesson = ( 
            <React.Fragment>
                <Lesson.Header>
                    <Lesson.Title>{selectedLesson.title}</Lesson.Title>
                    <Lesson.Details>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <Lesson.Details.Date>
                            <Moment date={selectedLesson.date} 
                                    format={DATE_FORMAT} />
                        </Lesson.Details.Date>
                    </Lesson.Details>
                </Lesson.Header>
                <Lesson.Content dangerouslySetInnerHTML={{__html: selectedLesson.content}} />
                <Attachment>
                    <Attachment.Header>
                        <Attachment.Header.Icon>
                            <FontAwesomeIcon icon={faPaperclip} />
                        </Attachment.Header.Icon>
                        Załączniki
                    </Attachment.Header>
                    <Attachment.List>
                        <Attachment.Element>
                            <Attachment.Element.Link href="#">Podstawy HTML i CSS</Attachment.Element.Link>
                        </Attachment.Element>
                        <Attachment.Element>
                            <Attachment.Element.Link href="#">Struktura pliku HTML</Attachment.Element.Link>
                        </Attachment.Element>
                        <Attachment.Element>
                            <Attachment.Element.Link href="#">Struktura pliku CSS</Attachment.Element.Link>
                        </Attachment.Element>
                        <Attachment.Element>
                            <Attachment.Element.Link href="#">Selektory</Attachment.Element.Link>
                        </Attachment.Element>
                    </Attachment.List>
                </Attachment>
            </React.Fragment>
        );
    }

    const toggleButtonContent = showSidebar ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-arrow-right" aria-hidden="true"></i>;

    return (
        <div>
            <React.Fragment>
                <ToggleButton 
                    sidebarOpened={showSidebar}
                    onClick={() => setSidebarOpened(!showSidebar)}>{toggleButtonContent}</ToggleButton>
                <LessonList sidebarOpened={showSidebar} />
                <Lesson sidebarOpened={showSidebar}>
                    {lesson}
                </Lesson>
            </React.Fragment>
        </div>
    );
}

const mapStateToProps = state => ({
    selectedLesson: state.lessons.selectedLesson
});

const mapDispatchToProps = {
    getSingleLesson,
    setSelectedLesson
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleLesson);
export { SingleLesson }