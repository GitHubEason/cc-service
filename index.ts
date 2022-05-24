import app from "./app";
import { logger } from "./src/utils/logger";
import { port } from "./src/config/config";

/**
 * Server Activation
 */
app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
