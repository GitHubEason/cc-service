require("dotenv").config();
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

/**
 * Server Activation
 */
app.listen(8080, () => {
  console.log(`Listening on port ${8080}`);
});
