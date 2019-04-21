import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import SERVER from './schema.js';

const APP = express();

SERVER.applyMiddleware({
	app: APP
});

mongoose.connect('mongodb://localhost/graphqlTutorial');
const connection = mongoose.connection;

connection.once('open', () => {
	console.log('connection to mongodb was successful');
});

const PORT = 3001 || process.env;

APP.use(cors());

APP.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});


APP.listen(PORT, () => {
	console.log(`The server has started on port: ${PORT}`);
});

export default APP;