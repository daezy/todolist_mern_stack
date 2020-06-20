const Joi = require('joi');

const registerValidation = (value) => {
	const schema = {
		name: Joi.string().required().min(3).max(100).trim(),
		email: Joi.string().email().required().trim(),
		password: Joi.string().trim().min(5).max(1024).required(),
	};

	return Joi.validate(value, schema);
};
const loginValidation = (value) => {
	const schema = {
		email: Joi.string().email().required().trim(),
		password: Joi.string().trim().min(6).required(),
	};

	return Joi.validate(value, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
