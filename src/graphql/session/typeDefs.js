import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Subject {
    name: String!
    level: String!
  }
  
  type Session {
    id: ID!
    tutor: User!
    date: String!
    time: String!
    location: String!
    subjects: [Subject]
  }

  extend type Query {
    sessions: [Session]
    session(id: ID!): User
  }
`;

module.exports = {
  typeDefs,
};
