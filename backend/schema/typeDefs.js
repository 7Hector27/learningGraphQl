const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    name: String
    password: String
    email: String
  }

  type Query {
    hello: String!
  }

  input registerInput {
    name: String
    password: String
    email: String
  }

  type Mutation {
    RegisterUser(post: registerInput): User
  }
`;
module.exports = typeDefs;
