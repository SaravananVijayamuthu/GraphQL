
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Second {
    text: String!
    mobile: String!
}

type RootQuery {
    Test: Second!
}

schema{
    query: RootQuery
} 

`);
