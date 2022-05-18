import express from "express";
import { addCourse, getAllCourses } from "../controllers/course.controller";

export const courseRouter = express.Router();
courseRouter.get("", getAllCourses);
courseRouter.post("", addCourse);
