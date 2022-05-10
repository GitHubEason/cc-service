/**
 * Required External Modules and Interfaces
 */
import { Request, Response } from "express";
import * as UserModel from "../models";
import { BaseUser, User } from "../models/interface/user.interface";

// GET items
const getAllUser = async (req: Request, res: Response) => {
	try {
		const users: User[] = await UserModel.findAll();

		res.status(200).send(users);
	} catch (e: any) {
		res.status(500).send(e.message);
	}
};

export = getAllUser;

// GET items/:id
// POST items
// PUT items/:id
// DELETE items/:id
