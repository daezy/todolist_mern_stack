import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	state = {
		email: '',
		password: '',
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};
	render() {
		return (
			<div className="row mt-5">
				<div className="col-md-4 m-auto card border-0 shadow-sm rounded-lg">
					<div className="card-body py-5">
						<h1
							className="text-center p-4"
							style={{
								letterSpacing: '2px',
								fontFamily: 'Courier new',
							}}
						>
							Login
							<i class="fas fa-user-circle"></i>
						</h1>
						<form onSubmit={this.handleSubmit}>
							<div class="form-group">
								<label for="">Email</label>
								<input
									type="email"
									class="form-control shadow-none"
									name="email"
									value={this.state.email}
									onChange={this.handleChange}
									required
								/>
							</div>
							<div class="form-group">
								<label for="">Password</label>
								<input
									type="password"
									class="form-control shadow-none"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
									required
								/>
							</div>
							<button
								type="submit"
								class="btn btn-danger submit btn-block mt-4 shadow-none"
							>
								Login
							</button>
						</form>
						<p className="mt-3">
							Dont have an Account?{' '}
							<Link to="/register">Register</Link>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
