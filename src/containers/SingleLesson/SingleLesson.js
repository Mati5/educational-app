import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import LessonList from './LessonList';
import Lesson  from '../../components/Lesson/index';
import Attachment from '../../components/Attachment/index';
import { getSingleLesson, setSelectedLesson, getFile } from '../../store/Lessons/actions';
import { ToggleButton } from '../../components/Navigation/ToggleButton/style';
import LinearProgress from '@material-ui/core/LinearProgress';

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

    const getFileHandler = (fileId, fileName) => {
        getFile(fileId, fileName);
    }

    let lesson = <LinearProgress />;
    if(selectedLesson) {
        lesson = ( 
            <React.Fragment>
                <Lesson sidebarOpened={showSidebar} post={selectedLesson}>
                    {selectedLesson.attachments.length > 0 ? <Attachment files={selectedLesson.attachments} downloadFile={getFileHandler} /> : null}
                </Lesson>
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
export { SingleLesson }