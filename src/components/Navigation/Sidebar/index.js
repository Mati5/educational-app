import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { SidebarLayout } from './SidebarLayout';
import { List, ListElement, ListLink } from './List';
import { getLessons, clearLessons } from '../../../store/Lessons/actions';

const Sidebar = ({getLessons, clearLessons, loading, lessons, sidebarOpened}) => {
    useEffect(() => {
        getLessons();

        return () => {
            clearLessons();
        }
    }, [getLessons, clearLessons]);

    let lessonList = <p>Loading...</p>;

    if(!loading) {
        lessonList = lessons.map((lesson, index) => (
            <ListElement key={lesson.id}>
                <ListLink to={{ pathname: `/lessons/${lesson.title}`, search: `?id=${lesson.id}` }}>{index+1}. {lesson.title}</ListLink>
            </ListElement>
        ));
    }

    return (
        <React.Fragment>
            <SidebarLayout opened={sidebarOpened}>
                <List>
                    {lessonList}
                </List>
            </SidebarLayout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);