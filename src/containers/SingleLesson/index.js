import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSingleLesson, setSelectedLesson } from '../../store/Lessons/actions';
import Sidebar from '../../components/Navigation/Sidebar/index';
import { SingleLessonLayout } from './SingleLessonLayout';

const SingleLesson = ({getSingleLesson, setSelectedLesson, selectedLesson, location}) => {
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        getSingleLesson(params.get('id'));
        return () => {
            setSelectedLesson(null);
        }
    }, [getSingleLesson, setSelectedLesson, location]);

    let lesson = <p>Loading....</p>;
    if(selectedLesson) {
        lesson = ( 
            <SingleLessonLayout>
                <h2>{selectedLesson.title}</h2><p>{selectedLesson.content}</p>
            </SingleLessonLayout>
        );
    }

    return (
        <div>
            <React.Fragment>
                <Sidebar />
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