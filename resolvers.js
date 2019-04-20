// const authors = [{
// 	id: 1,
// 	name: 'JK Rowling',
// 	age: 50,
// 	books: ['Harry McPooter and The Skunk Warrior', 'Harry McPooter and the Shiny Ball of Death']
// },{
// 	id: 2,
// 	name: 'George RR Martin',
// 	age: 70,
// 	books: ['GOT - Ill Kill You If You Die Before You Finish This', 'GOT - Maybe If You Didnt Put An Awkward Sex Scene In Every Awkward Sex Scene...']
// }, {
// 	id: 3,
// 	name: 'Stephen Queen',
// 	age: 60,
// 	books: ['I dont know', 'What hes written, shucks']
// }];

import mongoose from  'mongoose';

import authorModel from './models/author';

const RESOLVERS = {
	Query: {
		authors: () => {
			return authorModel.find();
		},
		authorAge: (root, { age }) => {
			return authorModel.findOne({ age: age });
		},
		authorId: (root, { id }) => {
			return authorModel.findOne({ id: id });
		}
	},
	Mutation: {
		addAuthor: (root, { name, age, books }) => {
			const author = new authorModel({ name: name, age: age, books: books });
			return author.save();
		},
		deleteAuthor: (root, { id }) => {
			return authorModel.findOneAndRemove({ id: id });
		},
		updateAuthor:(root, { id, name }) => {
			return authorModel.findOneAndUpdate({ id: id }, { name: name })
		}
	}

};


export default RESOLVERS;