import mongoose from "mongoose";
const { Schema } = mongoose;
import subjectSchema from "./Subject";

const userSchema = new Schema(
  {
    firstName: { type: Schema.Types.String, required: true },
    lastName: { type: Schema.Types.String, required: true },
    username: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true },
    bio: { type: Schema.Types.String, required: true },
    dateOfBirth: { type: Schema.Types.Date, required: false },
    tokenVersion: { type: Schema.Types.Number, default: 0, required: true },
    active: { type: Schema.Types.Boolean, default: true, required: true },
    subjects: [subjectSchema],
    role: { type: Schema.Types.String, default: "ROLE_USER", required: true },
  },
  { timestamps: true }
);

module.exports = userSchema;
