import { port } from "./src/config/config";

import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import { logger } from "./src/utils/logger";
import { swaggerDoc } from "./src/utils/swagger";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
/**
 * Server Activation
 */

app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
