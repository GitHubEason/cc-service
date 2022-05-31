//TODO: test
import { Request, Response } from "express";
import Test from "../models/test";

/**
 * @swagger
 * /api/v1/test:
 *  get:
 *    summary:
 *    tags: [Test]
 *    parameters:
 *    responses:
 *      200:
 *        descriptions: string
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 */

export async function getTest(req: Request, res: Response) {
  const test = await Test.find().exec();
  res.json(test);
}
