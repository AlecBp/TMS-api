import user from "./user";
import auth from "./auth";
import { gql } from "apollo-server-express";

const resolvers = [user.resolvers, auth.resolvers];

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  ${user.typeDefs}
  ${auth.typeDefs}
`;

module.exports = {
  resolvers,
  typeDefs,
};
