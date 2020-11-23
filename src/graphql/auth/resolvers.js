import { User } from "./../../models";
import { compare } from "bcryptjs";
import { clearCookie, createAcessToken, createRefreshToken, sendRefreshToken } from "../../service/auth";
import { ForbiddenError } from "apollo-server-express";

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.auth.isAuth) {
        return User.findById(context.auth.userId);
      }
      throw new ForbiddenError();
    },
  },
  Mutation: {
    login: async (_, { email, password }, context) => {
      console.log(`New login attemp user '${email}' password '${password}'`);
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Could not find user");
      }

      const valid = await compare(password, user.password);

      if (!valid) {
        throw new Error("Wrong password");
      }

      const accessToken = createAcessToken(user);

      sendRefreshToken(context.res, createRefreshToken(user));

      return { token: accessToken, user };
    },
    revokeRefreshTokenForUser: async (_, { id }, context) => {
      // Admin can revoke anyones refresh token
      if (context.auth.isAuth && context.auth.role === "ROLE_ADMIN") {
        await User.findOneAndUpdate(
          { _id: id },
          { $inc: { tokenVersion: 1 } },
          { new: true, upsert: true, useFindAndModify: false }
        );
      }

      // A user can revokes its own session
      else if (context.auth.isAuth && context.auth.userId === id) {
        await User.findOneAndUpdate(
          { _id: id },
          { $inc: { tokenVersion: 1 } },
          { new: true, upsert: true, useFindAndModify: false }
        );
      }

      // Cannot revoke
      else {
        throw new ForbiddenError();
      }

      return true;
    },
    logout: (_, args, context) => {
      console.log("LOGOUT");
      clearCookie(context.res);
      return true;
    },
  },
};

module.exports = {
  resolvers,
};
