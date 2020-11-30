import mongoose from "mongoose";
const { Schema } = mongoose;

import subjectSchema from "./Subject";
import attendanceSchema from "./Attendance";

const sessionSchema = new Schema(
  {
    tutor: { type: Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Schema.Types.String, required: true },
    time: { type: Schema.Types.String, required: true },
    location: { type: Schema.Types.String, required: true },
    notes: { type: Schema.Types.String },
    attendance: [attendanceSchema],
    subjects: [subjectSchema],
  },
  { timestamps: true }
);

module.exports = sessionSchema;
