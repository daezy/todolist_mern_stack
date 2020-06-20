import { ADD_TODO, DELETE_TODO, FETCH_TODOS, SET_LOADING } from './types';
import axios from 'axios';

export const fetchTodos = () => (dispatch) => {
	dispatch(setLoading());
	axios
		.get('http://localhost:5000/api/todos')
		.then((resp) => {
			dispatch({
				type: FETCH_TODOS,
				payload: resp.data,
			});
		})
		.catch((err) => {
			console.log('Something happened ', err);
		});
};

export const addTodo = (data) => (dispatch) => {
	axios.post('http://localhost:5000/api/todos', data).then((resp) => {
		dispatch({
			type: ADD_TODO,
			payload: resp.data,
		});
	});
};
export const deleteTodo = (id) => (dispatch) => {
	axios.delete(`http://localhost:5000/api/todos/${id}`).then((res) => {
		dispatch({
			type: DELETE_TODO,
			payload: id,
		});
	});
};
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
