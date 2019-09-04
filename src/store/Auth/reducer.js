import * as actionTypes from './actionTypes';

const initialState = {
    token: null,
    userDetails: null,
    error: null,
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userDetails: action.payload.userDetails,
                error: null,
                loading: false
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userDetails: null
            }
        default:
            return state;
    }
}

export default authReducer;