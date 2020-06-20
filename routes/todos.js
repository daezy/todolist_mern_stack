const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

router.get('/', (req, res) => {
	Todo.find()
		.sort({ date: -1 })
		.then((todos) => {
			res.json(todos);
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
});
router.post('/', (req, res) => {
	const todo = new Todo({
		name: req.body.name,
	});
	todo.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
});

router.delete('/:id', (req, res) => {
	Todo.remove({ _id: req.params.id })
		.then((data) => {
			res.json({
				message: 'deleted todo',
			});
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
});

module.exports = router;
