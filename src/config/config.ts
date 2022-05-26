import * as dotenv from "dotenv";
dotenv.config();

export const PORT = parseInt(process.env.PORT!, 10) || 8080;
export const API = { prefix: process.env.API_PREFIX || "/api/v1" };
export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
