import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from '../actions/todoActions';

class Todo extends Component {
	deleteTodo = (id) => {
		this.props.deleteTodo(id);
	};

	render() {
		const { name, _id } = this.props.todo;
		return (
			<>
				<li className="list-group-item">
					<div className="relative">
						<label className="py-1">
							<span className="text-capitalize">{name}</span>
						</label>
						<button
							className="float-right btn font-weight-bolder"
							onClick={() => this.deleteTodo(_id)}
						>
							&times;
						</button>
					</div>
				</li>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	todos: state.todos,
});

export default connect(mapStateToProps, { deleteTodo })(Todo);
