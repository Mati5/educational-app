import axios from 'axios';

import * as actionTypes from './actionTypes';

export const setLessonsList = (lessonsList) => ({
    type: actionTypes.SET_LESSON_LIST,
    payload: lessonsList
});

export const getLessons = () => dispatch => {
    axios.get('https://educational-app-d2b14.firebaseio.com/lessons.json')
        .then(response => {
            let cityList = [];
            for(let key in response.data) {
                response.data[key].id = key;
                cityList.push(response.data[key]);
            }
            
            dispatch(setLessonsList(cityList));
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