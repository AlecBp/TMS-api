import mongoose from "mongoose";

import userSchema from "./User";
import sessionSchema from "./Session";

module.exports = {
  User: mongoose.model("User", userSchema),
  Session: mongoose.model("Session", sessionSchema),
};
