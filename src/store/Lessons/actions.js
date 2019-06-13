import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getLessonsAction = () => ({
    type: actionTypes.GET_LESSONS
});

export const getLessonsSuccess = (lessonsList) => ({
    type: actionTypes.GET_LESSONS_SUCCESS,
    payload: lessonsList
});

export const clearLessons = () => ({
    type: actionTypes.CLEAR_LESSONS
});

export const getLessons = () => dispatch => {
    dispatch(getLessonsAction());

    axios.get('https://educational-app-d2b14.firebaseio.com/lessons.json')
        .then(response => {
            let cityList = [];
            for(let key in response.data) {
                response.data[key].id = key;
                cityList.push(response.data[key]);
            }
            
            dispatch(getLessonsSuccess(cityList));
        })
        .catch(error => {
            console.log(error);
        })
}

export const setSelectedLesson = (selectedLesson) => ({
    type: actionTypes.SET_SELECTED_LESSON,
    payload: selectedLesson
});

export const getSingleLesson = (id) => (dispatch) => {
    axios.get(`https://educational-app-d2b14.firebaseio.com/lessons/${id}.json`)
        .then(response => {
            dispatch(setSelectedLesson(response.data));
        })
        .catch(error => {
            console.log(error);
        })
};