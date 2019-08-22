import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getMessagesAction = () => ({
    type: actionTypes.GET_MESSAGES
});

export const getMessagesSuccess = (messagesList) => ({
    type: actionTypes.GET_MESSAGES_SUCCESS,
    payload: messagesList
});

export const clearMessages = () => ({
    type: actionTypes.CLEAR_MESSAGES
});

export const getMessages = () => dispatch => {
    dispatch(getMessagesAction());

    axios.get('/api/chat')
        .then(response => {
            let messageList = response.data;
            dispatch(getMessagesSuccess(messageList));
        })
        .catch(error => {
            console.log(error);
        })
}

export const addMessageSuccess = (message) => ({
    type: actionTypes.ADD_MESSAGE_SUCCESS,
    payload: message
});

export const addMessage = (message) => dispatch => {
    // dispatch(addMessageAction());

    axios.post('/api/chat', message)
        .then(response => {
            const addedMessage = response.data;

            dispatch(addMessageSuccess(addedMessage));
           
        })
};

export const getUsers = () => dispatch => {
    axios.get("/api/users")
        .then(response => {
            const users = response.data;
            dispatch(getUsersSuccess(users));
        })
        .catch(error => {
            console.log(error);
        });
}

export const getUsersSuccess = (users) => ({
    type: actionTypes.GET_USERS_SUCCESS,
    payload: users
});

export const clearUsers = () => ({
    type: actionTypes.CLEAR_USERS
});