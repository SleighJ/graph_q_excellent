const TYPEDEFS = `type Author {
	id: String
	age: Int
	name: String
	books: [String]
}
	type Query {
		authors: [Author]
		authorAge(age: Int): Author
		authorId(id: String): Author
	}
	type Mutation {
		addAuthor(name: String!, age: Int!, books: [String]!): Author
		deleteAuthor(id: String!): Author 
	}
`;


export default TYPEDEFS;

