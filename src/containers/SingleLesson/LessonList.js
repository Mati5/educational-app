import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../../components/Navigation/Sidebar/index';
import { getLessons, clearLessons } from '../../store/Lessons/actions';

const LessonList = ({getLessons, clearLessons, loading, lessons, sidebarOpened}) => {
    useEffect(() => {
        getLessons();

        return () => {
            clearLessons();
        }
    }, [getLessons, clearLessons]);

    return (
        <React.Fragment>
            <Sidebar opened={sidebarOpened} loadedPosts={loading} posts={lessons} />
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    lessons: state.lessons.lessonList,
    loading: state.lessons.loading
});

const mapDispatchToProps = {
    getLessons,
    clearLessons
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonList);