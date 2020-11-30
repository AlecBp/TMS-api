import mongoose from "mongoose";
const { Schema } = mongoose;

const attendanceSchema = new Schema(
  {
    isPresent: { type: Schema.Types.Boolean },
    student: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = attendanceSchema;
