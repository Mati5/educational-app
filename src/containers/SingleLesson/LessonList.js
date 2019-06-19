import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Sidebar } from '../../components/Navigation/Sidebar/index';
import { getLessons, clearLessons } from '../../store/Lessons/actions';

const LessonList = ({getLessons, clearLessons, loading, lessons, sidebarOpened}) => {
    useEffect(() => {
        getLessons();

        return () => {
            clearLessons();
        }
    }, [getLessons, clearLessons]);

    let lessonList = <p>Loading...</p>;

    if(!loading) {
        lessonList = lessons.map((lesson, index) => (
            <Sidebar.Element key={lesson.id}>
                <Sidebar.Link to={{ pathname: `/lessons/${lesson.title}`, search: `?id=${lesson.id}` }}>{index+1}. {lesson.title}</Sidebar.Link>
            </Sidebar.Element>
        ));
    }

    return (
        <React.Fragment>
            <Sidebar opened={sidebarOpened}>
                <Sidebar.List>
                    {lessonList}
                </Sidebar.List>
            </Sidebar>
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