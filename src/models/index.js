import mongoose from "mongoose";

import userSchema from "./User";


module.exports = {
  User: mongoose.model("User", userSchema),
};
