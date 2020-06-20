import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="row mt-5">
			<div className="col-md-4 m-auto card border-0 shadow-sm rounded-lg">
				<div className="card-body py-5">
					<h4 className="text-center">
						<i class="fab fa-node-js fa-5x"></i>
					</h4>
					<h4 className="text-center font-weight-lighter text-uppercase">
						Welcome User
					</h4>
					<div className="mt-5 d-flex justify-content-around">
						<Link
							to="/login"
							style={{
								flex: 1,
								textDecoration: 'none',
								marginRight: '3px',
							}}
						>
							<button className="btn btn-danger btn-block shadow-none">
								Login
							</button>
						</Link>
						<Link
							to="/register"
							style={{
								flex: 1,
								textDecoration: 'none',
								marginLeft: '3px',
							}}
						>
							<button className="btn btn-danger btn-block shadow-none">
								Register
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
