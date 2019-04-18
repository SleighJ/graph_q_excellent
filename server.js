import express from 'express';
const APP = express();
import SERVER from './schema.js';

SERVER.applyMiddleware({
	app: APP
});

const PORT = 3001 || process.env;

APP.listen(PORT, () => {
	console.log(`The server has started on port: ${PORT}`);
});

export default APP;