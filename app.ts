import { port } from "./src/config/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { logger } from "./src/utils/logger";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

/**
 * Server Activation
 */
app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
