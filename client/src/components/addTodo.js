import React, { Component } from 'react';
import { addTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class AddTodo extends Component {
	state = {
		value: '',
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const todo = {
			name: this.state.value,
		};
		this.props.addTodo(todo);
		this.setState({
			value: '',
		});
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control shadow-none"
						value={this.state.value}
						onChange={(e) =>
							this.setState({ value: e.target.value })
						}
					/>
					<div className="input-group-append">
						<button className="btn btn-danger shadow-none">
							Add
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default connect(null, { addTodo })(AddTodo);
