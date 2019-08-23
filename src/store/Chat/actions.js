import * as actionTypes from './actionTypes';
import * as api from './api';

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

   api.fetchMessages()
        .then(response => {
            let messageList = response.data;
            dispatch(getMessagesSuccess(messageList));
        })
        .catch(error => {
            console.log(error);
        })
};

export const addMessageSuccess = (message) => ({
    type: actionTypes.ADD_MESSAGE_SUCCESS,
    payload: message
});

export const addMessage = (message) => dispatch => {
    // dispatch(addMessageAction());

   api.createMessage(message)
        .then(response => {
            const addedMessage = response.data;

            dispatch(addMessageSuccess(addedMessage));
           
        })
};