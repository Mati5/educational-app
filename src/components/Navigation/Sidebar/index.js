import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { SidebarLayout } from './SidebarLayout';
import { List, ListElement, ListLink } from './List';
import { getLessons, setLessonsList } from '../../../store/Lessons/actions';

const Sidebar = ({getLessons, setLessonsList, lessonList}) => {
    useEffect(() => {
        getLessons();

        return () => {
            setLessonsList([]);
        }
    }, [getLessons, setLessonsList]);

    const lessons = lessonList.map((lesson, index) => (
        <ListElement key={lesson.id}>
            <ListLink to={{ pathname: `/lessons/${lesson.title}`, search: `?id=${lesson.id}` }}>{index+1}. {lesson.title}</ListLink>
        </ListElement>
    ));

    return (
        <SidebarLayout>
            <List>
                {lessons}
            </List>
        </SidebarLayout>
    );
}

const mapStateToProps = state => ({
    lessonList: state.lessons.lessonList
});

const mapDispatchToProps = {
    getLessons,
    setLessonsList
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);