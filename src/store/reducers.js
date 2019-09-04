import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import lessonsReducer from './Lessons/reducer';
import chatReducer from './Chat/reducer';
import userReducer from './Users/reducer';
import authReducer from './Auth/reducer';

const rootReducer = combineReducers({
    lessons: lessonsReducer,
    chat: chatReducer,
    users: userReducer,
    auth: authReducer,
    form: formReducer
});

export default rootReducer;