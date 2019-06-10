import * as actionTypes from './actionTypes';

const initialState = {
    lessonList: [],
    selectedLesson: null
}

const lessonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_LESSON_LIST:
            return {
                ...state,
                lessonList: action.payload
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