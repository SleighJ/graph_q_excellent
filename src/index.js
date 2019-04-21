import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";

import { ApolloProvider } from 'react-apollo';

//gets blocked by cors
// uri: "http://localhost:3001/graphqlTutorial",

//refuses connection (possibly because of cors)
// uri: "http://localhost/graphqlTutorial",
//https://stackoverflow.com/questions/45115309/error-options-neterr-connection-refused

const apolloClient = new ApolloClient({
	// uri: "http://localhost:3001/graphqlTutorial",
		uri: "http://localhost/graphqlTutorial"
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
