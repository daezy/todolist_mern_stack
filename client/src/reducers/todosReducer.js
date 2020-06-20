import {
	ADD_TODO,
	DELETE_TODO,
	FETCH_TODOS,
	SET_LOADING,
} from '../actions/types';

const states = {
	todos: [],
	isLoadinng: false,
};

export default function (state = states, action) {
	switch (action.type) {
		case FETCH_TODOS:
			return {
				...state,
				todos: action.payload,
				isLoadinng: false,
			};
		case ADD_TODO:
			return {
				...state,
				todos: [action.payload, ...state.todos],
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(
					(todo) => todo._id !== action.payload,
				),
			};
		case SET_LOADING:
			return {
				...state,
				isLoadinng: true,
			};
		default:
			return state;
	}
}
