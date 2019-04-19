const authors = [{
	id: 1,
	name: 'JK Rowling',
	age: 50,
	books: ['Harry McPooter and The Skunk Warrior', 'Harry McPooter and the Shiny Ball of Death']
},{
	id: 2,
	name: 'George RR Martin',
	age: 70,
	books: ['GOT - Ill Kill You If You Die Before You Finish This', 'GOT - Maybe If You Didnt Put An Awkward Sex Scene In Every Awkward Sex Scene...']
}, {
	id: 3,
	name: 'Stephen Queen',
	age: 60,
	books: ['I dont know', 'What hes written, shucks']
}];

const RESOLVERS = {
	Query: {
		authors: () => {
			return authors
		},
		authorAge: (root, args) => {
			const age = args.age;
			return authors.find(author => author.age === age);
		},
		authorId: (root, args) => {
			const id = args.id;
			return authors.find(author => author.id === id);
		}
	}
};


export default RESOLVERS;