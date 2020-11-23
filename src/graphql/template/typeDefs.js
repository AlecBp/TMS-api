import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(firstName: String!): User
  }
`;

module.exports = {
  typeDefs,
};
