// import express from 'express';
// import {
// 	graphqlExpress,
// 	graphiqlExpress,
// } from 'apollo-server-express';
// import { makeExecutableSchema } from 'graphql-tools';
// import bodyParser from 'body-parser';
//
// const app = express();
//
// // app.use('/graphiql', graphiqlExpress() );
//
// app.use(
// 	'/graphql',
// 	bodyParser.json(),
// 	graphqlExpress({
// 		schema: SCHEMA,
// 	})
// );
//
// app.use(
// 	'/graphiql',
// 	graphiqlExpress({ endpointURL: `/graphql` })
// );
//
// const PORT = 3001 || process.env;
//
// //
// // app.get('/graphql', (req, res) => {
// // 	res.send({ express: 'Yo Momma' });
// // });
//
// app.listen(port, () => {
// 	console.log(`listening on port ${PORT}`);
// });


// Imports: Express
import express from 'express';
const APP = express();
// Imports: GraphQL
import SERVER from './schema.js';
// Middleware: GraphQL
SERVER.applyMiddleware({
	app: APP
});
// Express: Port
const PORT = 3001 || process.env;
// Express: Listener
APP.listen(PORT, () => {
	console.log(`The server has started on port: ${PORT}`);
	console.log(`http://localhost:${PORT}/graphql`);
});
// Exports
export default APP;