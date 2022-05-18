/**
 * Required External Modules
 */
import { port, api } from "./src/config/config";

import morgan from "morgan";
import express from "express";
import helmet from "helmet";

import router from "./src/routes";
import { cors } from "./src/middleware/cors";
import { logger } from "./src/utils/logger";
import { connectToDB } from "./src/utils/db";
/**
 * App Variables
 */
if (!port) {
  process.exit(1);
}
// const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors);
app.use(express.json());
app.use(morgan("dev"));

app.use(api.prefix, router);

connectToDB();
/**
 * Server Activation
 */
app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
