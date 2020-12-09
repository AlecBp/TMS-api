import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    dateOfBirth: String
    active: Boolean
    role: String
    bio: String!
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
  }

  extend type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      username: String!
      password: String!
      dateOfBirth: String
      role: String
      bio: String!
    ): User

    editUser(
      id: ID!
      firstName: String
      lastName: String
      email: String
      username: String
      password: String
      dateOfBirth: String
      role: String,
      bio: String
    ): User
  }
`;

module.exports = {
  typeDefs,
};
