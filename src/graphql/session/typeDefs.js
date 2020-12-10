import { gql } from "apollo-server-express";

const typeDefs = gql`
   type Attendance {
    isPresent: Boolean
    student: User
  }

  type Session {
    id: ID!
    tutor: User!
    date: String!
    time: String!
    location: String!
    notes: String!
    subjects: [Subject]
    attendance: [Attendance]
  }

  extend type Query {
    sessions: [Session]
    session(id: ID!): Session
  }

  extend type Mutation {
    editNotes(sessionId: ID!, notes: String!): Session
    editAttendance(sessionId: ID!, studentId: ID!, status: Boolean!): Session
  }
`;

module.exports = {
  typeDefs,
};
