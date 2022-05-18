import { Request, Response } from "express";

import { ICourse } from "../models/interface/course.interface";
import Course from "../models/course";

export async function getAllCourses(req: Request, res: Response) {
  const courses: ICourse[] = await Course.find().exec();
  res.json(courses);
}

export async function addCourse(req: Request, res: Response) {
  const { code, name, description } = req.body;
  const course = new Course({ code, name, description });
  await course.save();
  res.status(201).json(course);
}
