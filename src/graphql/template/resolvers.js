import { User } from "./../../models";

const resolvers = {
  Query: {
    users: () => User.find({}),
  },
  Mutation: {
    addUser: (_, { firstName }) => {
      const newUser = new User({ firstName });
      return newUser.save();
    },
  },
};

module.exports = {
  resolvers,
};
