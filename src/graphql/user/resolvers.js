import { User } from "./../../models";
import { hash, compare } from "bcryptjs";
import { getFieldsForUpdate } from "./../utils";

const resolvers = {
  Query: {
    users: () => User.find({}),
    user: (_, { id }) => {
      return User.findById(id);
    },
  },
  Mutation: {
    addUser: async (_, { firstName, lastName, email, username, password, dateOfBirth, role }) => {
      const hashedPassword = await hash(password, 12);
      const newUser = new User({ firstName, lastName, email, username, password: hashedPassword, dateOfBirth, role });
      return newUser.save();
    },

    editUser: async (_, { id, firstName, lastName, email, username, password, dateOfBirth, role }) => {
      getFieldsForUpdate({ id, firstName, lastName, email, username, password, dateOfBirth, role });
      // Implement findoneandupdate
      // const newUser = new User({ firstName, lastName, email, username, password: hashedPassword, dateOfBirth });
      return newUser.findById(id);
    },
  },
};

module.exports = {
  resolvers,
};
