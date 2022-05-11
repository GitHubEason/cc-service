/**
 * Required External Modules
 */
import { port, api } from "./src/config/config";

import morgan from "morgan";
import express from "express";
import helmet from "helmet";

import router from "./src/routes";
import { cors } from "./src/middleware/cors";
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
app.use(morgan("tiny"));

app.use(api.prefix, router);
/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
