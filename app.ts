import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import { swaggerDoc } from "./src/utils/swagger";
import router from "./src/routes";
import { api } from "./src/config/config";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(api.prefix, router);

export default app;
