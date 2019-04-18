import axios from 'axios';

// const RESOLVERS = {
// 	Query: {
// 		test_query: (parent, args) => {
// 			return axios.get(`www.apiurl.com/people`)
// 				.then((response) => response.data)
// 				.catch((error) => console.log(error))
// 		}
// 	}
// };

const authors = [{
	name: 'JK Rowling',
	age: 50,
	books: ['Harry McPooter and The Skunk Warrior', 'Harry McPooter and the Shiny Ball of Death']
},{
	name: 'George RR Martin',
	age: 70,
	books: ['GOT - Ill Kill You If You Die Before You Finish This', 'GOT - Maybe If You Didnt Put An Awkward Sex Scene In Every Scene...']
}];

const RESOLVERS = {
	Query: {
		author: () => {
			return authors
		}
	}
};


export default RESOLVERS;