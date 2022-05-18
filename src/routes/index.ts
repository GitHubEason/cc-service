import express from "express";
import { courseRouter } from "./course";
import userRouter from "./user";

const router = express.Router();
router.use("/user", userRouter);
router.use("/courses", courseRouter);
export = router;
