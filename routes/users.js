const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { registerValidation, loginValidation } = require('./validation');

router.post('/register', (req, res) => {
	const { name, email, password } = req.body;
	const { error, value } = registerValidation(req.body);
	if (error)
		return res.status(400).json({
			error: error.details[0].message,
		});
	User.findOne({ email: email })
		.then((user) => {
			if (user) {
				return res.status(400).json({
					msg: 'User with the given email already exists',
				});
			} else {
				bcrypt.genSalt(10, (err, salt) => {
					if (err) throw err;
					bcrypt.hash(password, salt, (err, hash) => {
						const user = new User({
							name,
							email,
							password: hash,
						});
						user.save().then((data) => {
							const token = jwt.sign(
								{ _id: data._id, email: data.email },
								process.env.JWT_SECRET,
								{ expiresIn: 3600 },
							);

							res.status(200).json({
								msg: 'User created successfully',
								user: {
									id: data._id,
									name: data.name,
									email: data.email,
								},
								token,
							});
						});
					});
				});
			}
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
});

router.post('/login', (req, res) => {
	const { email, password } = req.body;
	const { error, value } = loginValidation(req.body);
	if (error)
		return res.status(400).json({
			error: error.details[0].message,
		});
	User.findOne({ email: email })
		.then((user) => {
			if (!user)
				return res.status(400).json({ msg: 'Email doesnt exist' });

			bcrypt.compare(password, user.password, (err, isMatch) => {
				if (!isMatch)
					return res.status(400).json({
						msg: 'Incorrect password',
					});
				const token = jwt.sign(
					{ _id: user._id, email: user.email },
					process.env.JWT_SECRET,
					{ expiresIn: 3600 },
				);

				res.status(200).json({
					msg: 'Auth successful',
					user: {
						id: user._id,
						name: user.name,
						email: user.email,
					},
					token,
				});
			});
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
});
router.get('/:id', (req, res) => {
	const { id } = req.params;
	User.findOne({ _id: id })
		.select('-password')
		.then((user) => {
			res.status(200).json({
				user,
			});
		})
		.catch((err) => {
			res.status(400).json({
				error: err,
			});
		});
});
module.exports = router;
