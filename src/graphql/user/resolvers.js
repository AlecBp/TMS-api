import { User } from "./../../models";
import { hash, compare } from "bcryptjs";
import { getFieldsForUpdate } from "./../utils";
// import {subjectToUser} from "./service";

const resolvers = {
  Query: {
    users: () => User.find({}),
    user: (_, { id }) => {
      return User.findById(id);
    },
  },
  Mutation: {
    addUser: async (_, { firstName, lastName, email, username, password, dateOfBirth, role, bio }) => {
      const hashedPassword = await hash(password, 12);
      const newUser = new User({ firstName, lastName, email, username, password: hashedPassword, dateOfBirth, role, bio });
      return newUser.save();
    },

    editUser: async (_, { id, firstName, lastName, email, username, password, dateOfBirth, role, bio }) => {
      getFieldsForUpdate({ id, firstName, lastName, email, username, password, dateOfBirth, role, bio });
      // Implement findoneandupdate
      // const newUser = new User({ firstName, lastName, email, username, password: hashedPassword, dateOfBirth });
      return newUser.findById(id);
    },

    // addSubjectsToUser: async ({subject, user}) => {
    //   return subjectToUser({subject, user}, "add");
    // },

    // removeSubjectsFromUser: async ({subject, user}) => {
    //   return subjectToUser({subject, user}, "remove");
    // },
  },
};

module.exports = {
  resolvers,
};
