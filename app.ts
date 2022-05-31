import { API } from "./src/config";

import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import { swaggerDoc } from "./src/utils/swagger";
import router from "./src/routes";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(API.prefix, router);

export default app;
