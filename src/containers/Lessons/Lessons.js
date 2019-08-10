import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import { getLessons, clearLessons } from '../../store/Lessons/actions';
import Pagination from '../../components/Navigation/Pagination/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components/UI/Button/Button';
import { H3 } from '../../components/Headers/index';
import { AppContainer } from '../../components/AppContainer/AppContainer';
import { HeaderSection } from '../../components/Headers/HeaderSection';
import { Rectangle } from '../../components/Rectangle/index';

const Lessons = ({getLessons, clearLessons, loading, lessons, location}) => {
    const [postsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    useEffect(() => {
        getLessons();

        return () => {  
            clearLessons();
        }
    }, [getLessons, clearLessons]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if(params.get('page') && params.get('page')<lessons.length) {
            setCurrentPage(params.get('page'));
        }
        else {
            setCurrentPage(1)
            history.push({ pathname: `/lessons`, search: `?page=1` });
        }   
        
    }, [location, lessons]);

    const onPageChanged = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    let lessonList = <CircularProgress />
    if(!loading) {
        lessonList = lessons.slice(indexOfFirstPost, indexOfLastPost).map(lesson => (
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
            <Pagination postsPerPage={postsPerPage} 
                        totalPosts={lessons.length} 
                        currentPage={parseInt(currentPage)}
                        onPageChanged={onPageChanged} />
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