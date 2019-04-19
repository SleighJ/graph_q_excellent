const TYPEDEFS = `type Author {
	id: Int
	age: Int
	name: String
	books: [String]
}
	type Query {
		authors: [Author]
		authorAge(age: Int): Author
		authorId(id: Int): Author
	}
`;


export default TYPEDEFS;

