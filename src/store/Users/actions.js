import * as actionTypes from './actionTypes';

import * as api from './api';

export const getUsers = () => dispatch => {
    api.fetchUsers()
        .then(response => {
            const users = response.data;
            dispatch(getUsersSuccess(users));
        })
        .catch(error => {
            console.log(error);
        });
};

export const getUsersSuccess = (users) => ({
    type: actionTypes.GET_USERS_SUCCESS,
    payload: users
});

export const clearUsers = () => ({
    type: actionTypes.CLEAR_USERS
});

export const addUserSuccess = (user) => ({
    type: actionTypes.ADD_USER_SUCCESS,
    payload: user
});

export const createUser = (userData) => dispatch => {
    api.signUp(userData)
        .then(response => {
            dispatch(addUserSuccess(response.data));
        });
};