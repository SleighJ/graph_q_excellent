// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    test_query: Test
  }
type Test {
    test_field_1: String
    test_field_2: Int
    test_field_3: Boolean
  }
`;
// Exports
export default TYPEDEFS;
