import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getSingleLesson, setSelectedLesson } from '../../store/Lessons/actions';
import LessonList from './LessonList';
import { Lesson } from '../../components/Lesson/index';
import { ToggleButton } from '../../components/Navigation/ToggleButton/index';

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

    let lesson = <p>Loading...</p>;
    if(selectedLesson) {
        lesson = ( 
            <React.Fragment>
                <h1>{selectedLesson.title}</h1>
                <div dangerouslySetInnerHTML={{__html: selectedLesson.content}} />
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