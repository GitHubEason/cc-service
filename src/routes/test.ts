//TODO: test
import express from "express";
import { getTest } from "../controllers/test.controller";
const testRouter = express.Router();
testRouter.get("/", getTest);
export = testRouter;
