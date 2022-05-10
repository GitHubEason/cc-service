import { BaseUser, User } from "./interface/user.interface";
import { Users } from "./interface/users.interface";

/**
 * In-Memory Store
 */
let users: Users = {
	1: {
		id: 1,
		name: "A",
	},
	2: {
		id: 2,
		name: "B",
	},
	3: {
		id: 3,
		name: "C",
	},
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<User[]> => Object.values(users);
