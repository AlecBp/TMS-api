import user from "./user";
import session from "./session";
import auth from "./auth";
import { gql } from "apollo-server-express";

const resolvers = [user.resolvers, auth.resolvers, session.resolvers];

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  ${user.typeDefs}
  ${session.typeDefs}
  ${auth.typeDefs}
`;

module.exports = {
  resolvers,
  typeDefs,
};
