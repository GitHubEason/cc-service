import mongoose from "mongoose";

import { ICourse } from "./interface/course.interface";

const schema = new mongoose.Schema<ICourse>({
  _id: { type: String, uppercase: true, alias: "code" },
  name: { type: String, required: true },
  description: { type: String, default: "" },
});

const Model = mongoose.model("Course", schema);
export default Model;
