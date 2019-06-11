import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getSingleLesson, setSelectedLesson } from '../../store/Lessons/actions';
import Sidebar from '../../components/Navigation/Sidebar/index';
import { SingleLessonLayout } from '../../components/SingleLesson/SingleLessonLayout';
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

    let lesson = <p>Loading....</p>;
    if(selectedLesson) {
        lesson = ( 
            <SingleLessonLayout sidebarOpened={showSidebar}>
                <h2>{selectedLesson.title}</h2><p>{selectedLesson.content}</p>
            </SingleLessonLayout>
        );
    }

    const toggleButtonContent = showSidebar ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-arrow-right" aria-hidden="true"></i>;

    return (
        <div>
            <React.Fragment>
                <ToggleButton 
                    sidebarOpened={showSidebar}
                    onClick={() => setSidebarOpened(!showSidebar)}>{toggleButtonContent}</ToggleButton>
                <Sidebar sidebarOpened={showSidebar} />
                {lesson}
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