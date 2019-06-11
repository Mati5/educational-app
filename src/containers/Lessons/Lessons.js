import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getLessons, clearLessons } from '../../store/Lessons/actions';
import Lesson from '../../components/Lesson/index';
import { Container } from '../../components/Container/Container';
import { H2 } from '../../components/Headers';

const Lessons = ({getLessons, clearLessons, loading, lessons}) => {
    useEffect(() => {
        getLessons();

        return () => {  
            clearLessons();
        }
    }, [getLessons, clearLessons]);

    let lessonList = <p>Loading...</p>
    if(!loading) {
        lessonList = lessons.map(lesson => (
            <Lesson key={lesson.id} title={lesson.title} content={lesson.content} id={lesson.id} />
        ));
    }
   
    return(
        <Container>
            <H2><i className="fa fa-book" aria-hidden="true"></i>Lekcje</H2>
            {lessonList}
        </Container>   
    );
}

const mapStateToProps = state => ({
    lessons: state.lessons.lessonList,
    loading: state.lessons.loading
});

const mapDispatchToProps = {
    getLessons,
    clearLessons
};

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);