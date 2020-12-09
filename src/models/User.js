import mongoose from "mongoose";
const { Schema } = mongoose;

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
    role: { type: Schema.Types.String, default: "ROLE_USER", required: true },
    subjects: { type: Schema.Types.ObjectId, ref: "Subject" }
  },
  { timestamps: true }
);

module.exports = userSchema;
