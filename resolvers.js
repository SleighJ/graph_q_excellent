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