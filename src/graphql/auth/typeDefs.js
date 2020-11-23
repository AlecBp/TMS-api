import { gql } from "apollo-server-express";

const typeDefs = gql`
  type LoginResponse {
    token: String!
    user: User
  }

  extend type Query {
    me: User
  }

  extend type Mutation {
    login(email: String!, password: String!): LoginResponse
    revokeRefreshTokenForUser(id: ID!): Boolean
    logout: Boolean
  }
`;

module.exports = {
  typeDefs,
};
