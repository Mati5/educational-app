import { combineReducers } from 'redux';

import lessonsReducer from './Lessons/reducer';
import chatReducer from './Chat/reducer';

const rootReducer = combineReducers({
    lessons: lessonsReducer,
    chat: chatReducer
});

export default rootReducer;