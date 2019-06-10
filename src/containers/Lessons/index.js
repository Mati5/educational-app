import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getLessons, setLessonsList } from '../../store/Lessons/actions';

import Lesson from '../../components/Lesson/index';
import { Container } from '../../components/Container/Container';
import { H2 } from '../../components/Headers/Headers';

const Lessons = ({getLessons, setLessonsList, lessons}) => {
    useEffect(() => {
        getLessons();

        return () => {  
            setLessonsList([]);
        }
    }, [getLessons, setLessonsList]);

    const lessonList = lessons.map(lesson => (
        <Lesson key={lesson.id} title={lesson.title} content={lesson.content} id={lesson.id} />
    ));
   
    return(
        <Container>
            <H2>Lekcje</H2>
            {lessonList}
        </Container>   
    );
}

const mapStateToProps = state => ({
    lessons: state.lessons.lessonList
});

const mapDispatchToProps = {
    getLessons,
    setLessonsList
};

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);