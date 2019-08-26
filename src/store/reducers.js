import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import lessonsReducer from './Lessons/reducer';
import chatReducer from './Chat/reducer';
import userReducer from './Users/reducer';

const rootReducer = combineReducers({
    lessons: lessonsReducer,
    chat: chatReducer,
    users: userReducer,
    form: formReducer
});

export default rootReducer;