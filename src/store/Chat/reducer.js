import * as actionTypes from './actionTypes';

const initialState = {
    messageList: [],
    userList: [],
    loading: false
}

const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_MESSAGES:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_MESSAGES_SUCCESS:
            return {
                ...state,
                messageList: action.payload,
                loading: false
            }
        case actionTypes.CLEAR_MESSAGES:
            return {
                ...initialState
            }

        case actionTypes.ADD_MESSAGE_SUCCESS:
            return {
                ...state,
                messageList: [...state.messageList, action.payload],
                loading: false
            }
        case actionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                userList: action.payload
            }
        case actionTypes.CLEAR_USERS:
            return {
                initialState
            }
        default:
            return state
    }
}

export default chatReducer; 