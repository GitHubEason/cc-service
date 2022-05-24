import * as dotenv from "dotenv";
dotenv.config();

export const port = parseInt(process.env.PORT!, 10) || 8000;
export const api = { prefix: process.env.API_PREFIX || "/api/v1" };
