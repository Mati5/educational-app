import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Rectangle from '../../components/Rectangle/index';
import Pagination from '../../components/Navigation/Pagination/index';
import history from '../../history';
import { getLessons, clearLessons } from '../../store/Lessons/actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import { AppContainer } from '../../shared/AppContainer';
import { HeaderSection } from '../../components/Headers/HeaderSection';

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
            <Rectangle key={lesson.id} post={lesson} />
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