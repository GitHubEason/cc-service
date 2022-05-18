import mongoose from "mongoose";

export function connectToDB() {
  const db = mongoose.connection;
  db.on("connected", () => {
    console.log("DB connected");
  });
  db.on("error", (error) => {
    console.error(error.message);
    process.exit(2);
  });
  db.on("disconnected", () => {
    console.log("db connection lost ");
  });
  return mongoose.connect("mongodb+srv://cc:cc12345678@cluster0.lavsz.mongodb.net/ccTest");
}
