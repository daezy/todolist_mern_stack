import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import TodoApp from './components/TodoApp';
import Home from './components/Home';
import Register from './components/Register';

class App extends Component {
	state = {};

	render() {
		return (
			<Router>
				<div className="container">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/app" exact component={TodoApp} />
						<Route path="/login" component={Login} />
						<Route path="/Register" component={Register} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
