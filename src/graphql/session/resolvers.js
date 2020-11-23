import { Session } from "./../../models";

const resolvers = {
  Query: {
    sessions: () => Session.find({}).populate("tutor"),
    session: (_, { id }) => {
      return Session.findById(id).populate("tutor");
    },
  },
};

module.exports = {
  resolvers,
};
