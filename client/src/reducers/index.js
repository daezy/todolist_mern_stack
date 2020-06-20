import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import errorsReducer from './errorsReducer';
import authReducer from './authReducer';

const root = combineReducers({
	todos: todosReducer,
	auth: authReducer,
	errors: errorsReducer,
});

export default root;
