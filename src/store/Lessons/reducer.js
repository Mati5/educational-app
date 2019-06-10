import * as actionTypes from './actionTypes';

const initialState = {
    lessonList: [],
    selectedLesson: null,
    loading: false
}

const lessonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_LESSONS:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_LESSONS_SUCCESS:
            return {
                ...state,
                lessonList: action.payload,
                loading: false
            }
        case actionTypes.CLEAR_LESSONS:
            return {
                ...initialState
            }
        case actionTypes.SET_SELECTED_LESSON:
            return {
                ...state,
                selectedLesson: action.payload
            }
        default:
            return state
    }
}

export default lessonsReducer; 