import * as actionTypes from './actionTypes';
import * as api from './api';
import { loadState } from '../../helpers/heleprs';

export const authStart = () => ({
    type: actionTypes.AUTH_START
});

export const authSuccess = (token, userDetails) => ({
    type: actionTypes.AUTH_SUCCESS,
    payload: {
        token: token,
        userDetails: userDetails
    }
});

export const authFail = (error) => ({
    type: actionTypes.AUTH_FAIL,
    error: error
});

export const logout = () => ({
        type: actionTypes.AUTH_LOGOUT
});

export const authCheckState = () => async dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        await api.clearLogout();
        
        await api.logout();
    } else {
        dispatch(authSuccess(JSON.parse(token), loadState('user')));
    }
};