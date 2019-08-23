import { combineReducers } from 'redux';

import lessonsReducer from './Lessons/reducer';
import chatReducer from './Chat/reducer';
import userReducer from './Users/reducer';

const rootReducer = combineReducers({
    lessons: lessonsReducer,
    chat: chatReducer,
    users: userReducer
});

export default rootReducer;