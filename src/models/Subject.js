import mongoose from "mongoose";
const { Schema } = mongoose;

const subjectSchema = new Schema(
  {
    name: { type: Schema.Types.String, required: true },
    level: { type: Schema.Types.String, required: true },
  },
  { timestamps: true }
);

module.exports = subjectSchema;
