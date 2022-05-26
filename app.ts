import { PORT, API } from "./src/config/config";

import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import { logger } from "./src/utils/logger";
import { swaggerDoc } from "./src/utils/swagger";
import router from "./src/routes";
import { connectToDB } from "./src/utils/db";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(API.prefix, router);

connectToDB();
/**
 * Server Activation
 */
app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
