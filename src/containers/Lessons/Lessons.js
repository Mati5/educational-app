import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getLessons, clearLessons } from '../../store/Lessons/actions';
import Lesson from '../../components/Lesson/index';
import { Container } from '../../components/Container/Container';
import { HeaderSection } from '../../components/Headers/HeaderSection';

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
            <HeaderSection><i className="fa fa-book" aria-hidden="true"></i>Lekcje</HeaderSection>
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