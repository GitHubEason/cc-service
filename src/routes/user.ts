import express from "express";
import getAllUser from "../controllers/user.controller";
const userRouter = express.Router();
userRouter.get("/", getAllUser);

export = userRouter;
