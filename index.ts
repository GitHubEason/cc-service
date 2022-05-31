import app from "./app";
import { logger } from "./src/utils/logger";
import { PORT } from "./src/config";
import { connectToDB } from "./src/utils/db";

connectToDB();

/**
 * Server Activation
 */
app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
