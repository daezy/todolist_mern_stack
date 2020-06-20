import {
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	USER_LOADED,
	USER_LOADING,
	REGISTER_SUCCESS,
	LOGOUT_SUCCESS,
	AUTH_ERROR,
	REGISTER_FAIL,
} from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	userLoading: false,
	isAuthenticated: false,
	user: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				userLoading: true,
			};
		case USER_LOADED:
			return {
				...state,
				...action.payload,
				userLoading: false,
			};
		default:
			return state;
	}
}
