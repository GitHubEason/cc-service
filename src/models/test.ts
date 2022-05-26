import mongoose from "mongoose";

const schema = new mongoose.Schema({
  description: { type: String, default: "hello world" },
});

const Model = mongoose.model("Test", schema);
export default Model;
