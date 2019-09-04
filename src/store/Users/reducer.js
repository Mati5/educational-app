import * as actionTypes from './actionTypes';

const initialState = {
    userList: [],
    loading: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                userList: action.payload
            }
        case actionTypes.SET_USERS:
            return {
                ...state,
                userList: action.payload
            }
        case actionTypes.CLEAR_USERS:
            return {
               ...initialState
            }
        case actionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                userList: [...state.userList, action.payload],
                loading: false
            }
        default:
            return state
    }
}

export default userReducer; 