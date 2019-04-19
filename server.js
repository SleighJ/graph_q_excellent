import express from 'express';
import mongoose from 'mongoose';

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

APP.listen(PORT, () => {
	console.log(`The server has started on port: ${PORT}`);
});

export default APP;