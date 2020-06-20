const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const productRoute = require('./routes/todos');
const userRoute = require('./routes/users');

dotenv.config();

console.log(process.env.JWT_SECRET);
mongoose
	.connect(process.env.MONGO_DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB Connected'))
	.catch((err) => console.log(`Couldnt connect to db  ${err}`));

app.use(cors());
app.use(express.json());

app.use('/api/todos', productRoute);
app.use('/api/users', userRoute);

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 400;
	next(error);
});
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: error.message,
	});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
