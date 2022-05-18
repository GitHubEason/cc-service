//TODO: test
import { Request, Response } from "express";

/**
 * @swagger
 * /api/v1/test:
 *  get:
 *    summary: return hello world
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

const getTest = async (req: Request, res: Response) => {
  try {
    res.status(200).send("hello world");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
};

export = getTest;
