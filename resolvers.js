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
}, {
	name: 'Stephen Queen',
	age: 60,
	books: ['I dont know', 'What hes written, shucks']
}];

const RESOLVERS = {
	Query: {
		authors: () => {
			return authors
		},
		author: (root, args) => {
			const age = args.age;
			return authors.find(author => author.age === age);
		}
	}
};


export default RESOLVERS;