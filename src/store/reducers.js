import { combineReducers } from 'redux';

import lessonsReducer from './Lessons/reducer';

const rootReducer = combineReducers({
    lessons: lessonsReducer
});

export default rootReducer;