import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import { getLessons, clearLessons } from '../../store/Lessons/actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../components/UI/Button/Button';
import { H3 } from '../../components/Headers/index';
import { AppContainer } from '../../components/AppContainer/AppContainer';
import { HeaderSection } from '../../components/Headers/HeaderSection';
import { Rectangle } from '../../components/Rectangle/index';

const Lessons = ({getLessons, clearLessons, loading, lessons}) => {
    useEffect(() => {
        getLessons();

        return () => {  
            clearLessons();
        }
    }, [getLessons, clearLessons]);

    let lessonList = <CircularProgress />
    if(!loading) {
        lessonList = lessons.map(lesson => (
            // <Lesson key={lesson.id} title={lesson.title} content={lesson.content} id={lesson.id} />
            <Rectangle key={lesson.id}>
                <Rectangle.Icon>
                    <FontAwesomeIcon icon={faFolderOpen} />
                </Rectangle.Icon>
                <Rectangle.Header>
                    <H3 width="70%">
                        <Rectangle.Link to={{ pathname: `/lessons/${lesson.title}`, search: `?id=${lesson.id}` }}>{lesson.title}</Rectangle.Link>
                    </H3>
                    <Button 
                        buttonColor="#07a9e4"
                        onClick={() => history.push({ pathname: `/lessons/${lesson.title}`, search: `?id=${lesson.id}` })}>Przejdź do lekcji</Button>
                </Rectangle.Header>
            </Rectangle>
        ));
    }
   
    return(
        <AppContainer>
            <HeaderSection><i className="fa fa-book" aria-hidden="true"></i>Lekcje</HeaderSection>
            {lessonList}
        </AppContainer>   
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
export { Lessons };