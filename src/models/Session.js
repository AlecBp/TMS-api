import mongoose from "mongoose";
const { Schema } = mongoose;

import subjectSchema from "./Subject";

const sessionSchema = new Schema(
  {
    tutor: { type: Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Schema.Types.String, required: true },
    time: { type: Schema.Types.String, required: true },
    location: { type: Schema.Types.String, required: true },
    subjects: [subjectSchema],
  },
  { timestamps: true }
);

module.exports = sessionSchema;
