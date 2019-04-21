import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { HttpLink } from 'apollo-link-http';

import { ApolloProvider, withApollo } from 'react-apollo';

// const networkInterface = createNetworkInterface({
// 	uri: "http://localhost/graphqlTutorial"
// });
//
// const client = new ApolloClient({networkInterface});

// const AppWithClient = withApollo(App);

const apolloClient = new ApolloClient({
	uri: "http://localhost/graphqlTutorial",
});

ReactDOM.render(
	<ApolloProvider client={apolloClient}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
