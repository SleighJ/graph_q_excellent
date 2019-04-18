import { ApolloServer } from 'apollo-server-express';

import TYPEDEFS from './types.js';
import RESOLVERS from './resolvers.js';

const SERVER = new ApolloServer({
	typeDefs: TYPEDEFS,
	resolvers: RESOLVERS,
	playground: {
		endpoint: `http://localhost:3001/graphql`,
		settings: {
			'editor.theme': 'light'
		}
	}
});

export default SERVER;