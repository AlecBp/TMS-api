import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Subject {
    name: String!
    level: String!
  }
  input InputSubject {
    name: String!
    level: String!
  }
`;

module.exports = {
  typeDefs,
};
