import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class TodoList extends Component {
	render() {
		return (
			<div>
				{this.props.todos.isLoadinng && (
					<div className="p-4">
						<p
							className="text-center text-uppercase font-weight-lighter"
							style={{ fontSize: '1.3rem' }}
						>
							Loading<span className="ml-2 spinner-border"></span>
						</p>
					</div>
				)}
				<ul className="list-group">
					<TransitionGroup className="todo-list">
						{this.props.todos.todos.map((todo) => (
							<CSSTransition  
								key={todo._id}
								timeout={500}
								classNames="item"
							>
								<Todo todo={todo} />
							</CSSTransition>
						))}
					</TransitionGroup>
				</ul>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	todos: state.todos,
});
export default connect(mapStateToProps, {})(TodoList);
