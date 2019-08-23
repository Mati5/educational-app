import { saveAs } from 'file-saver';

import * as actionTypes from './actionTypes';
import * as api from './api';

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

    api.fetchLessons()
        .then(response => {
            let cityList = response.data;
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
    const lessonId = parseInt(id);
    api.fetchSingleLesson(lessonId)
        .then(response => {
            dispatch(setSelectedLesson(response.data));
        })
        .catch(error => {
            console.log(error);
        })
};

export const getFile = (fileId, fileName) =>  {
    api.downloadFile(fileId)
        .then(response => {
            saveAs(response.data, fileName);
        })
};