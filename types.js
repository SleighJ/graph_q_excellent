const TYPEDEFS = `type Author {
	age: Int
	name: String
	books: [String]
}
	type Query {
		authors: [Author]
		author(age: Int): Author
	}
`;


export default TYPEDEFS;

