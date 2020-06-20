import React, { Component } from 'react';
import AddTodo from './addTodo';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { fetchTodos, setLoading } from '../actions/todoActions';

class TodoApp extends Component {
	componentDidMount() {
		this.props.fetchTodos();
	}
	render() {
		return (
			<div className="row mt-5">
				<div className="col-md-5 m-auto card border-0 shadow-sm rounded-lg">
					<div className="card-body py-5">
						<h3 className="text-center mb-4">
							Todos({this.props.todos.todos.length})
						</h3>
						<AddTodo />
						<TodoList />

						<p className="text-center mt-4 text-info text-uppercase font-weight-lighter">
							Logged in as Daniel 
						</p>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	todos: state.todos,
});

export default connect(mapStateToProps, { fetchTodos, setLoading })(TodoApp);
