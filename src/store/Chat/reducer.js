import * as actionTypes from './actionTypes';

const initialState = {
    messageList: [],
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
                messageList: [action.payload, ...state.messageList],
                loading: false
            }
        default:
            return state
    }
}

export default chatReducer; 