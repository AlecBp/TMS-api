import { ForbiddenError } from "apollo-server-express";
import { ObjectDoesNotExistError } from "./../errors/ObjectDoesNotExistError";
import { Session, User } from "./../../models";

const resolvers = {
  Query: {
    sessions: () => Session.find({}).populate("tutor").populate("attendance.student"),
    session: (_, { id }) => {
      return Session.findById(id).populate("tutor").populate("attendance.student");
    },
  },
  Mutation: {
    editAttendance: async (_, { sessionId, studentId, status }, context) => {
      const allowedRoles = ["ROLE_TUTOR", "ROLE_ADMIN"];
      // Auth
      if (!context.auth.isAuth || allowedRoles.indexOf(context.auth.role) === -1) throw new ForbiddenError();

      // Objects exist
      const [se, stu] = await Promise.all([
        Session.findById(sessionId).select(["_id", "tutor"]).populate("tutor").exec(),
        User.findById(studentId).select("_id").lean().exec(),
      ]);
      if (!se || !stu) throw new ObjectDoesNotExistError();

      // Is the current logged user (Tutor) the person assigned to that session
      if (se.tutor.id !== context.auth.userId) throw new ForbiddenError();

      // Updates
      return Session.findOneAndUpdate(
        { _id: sessionId, "attendance.student": studentId },
        {
          $set: { "attendance.$.isPresent": status },
        },
        {
          new: true,
          useFindAndModify: false,
        }
      )
        .populate("tutor")
        .populate("attendance.student")
        .exec();
    },
    editNotes: async (_, { sessionId, notes }, context) => {
      const allowedRoles = ["ROLE_TUTOR", "ROLE_ADMIN"];
      // Auth
      if (!context.auth.isAuth || allowedRoles.indexOf(context.auth.role) === -1) throw new ForbiddenError();

      // Objects exist
      const se = await Session.findById(sessionId).select(["_id", "tutor"]).populate("tutor").exec();
      if (!se) throw new ObjectDoesNotExistError();

      // Is the current logged user (Tutor) the person assigned to that session
      if (se.tutor.id !== context.auth.userId) throw new ForbiddenError();

      // Updates
      return Session.findOneAndUpdate(
        { _id: sessionId },
        {
          $set: { notes: notes },
        },
        {
          new: true,
          useFindAndModify: false,
        }
      )
        .populate("tutor")
        .populate("attendance.student");
    },
  },
};

module.exports = {
  resolvers,
};
