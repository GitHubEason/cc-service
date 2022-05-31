import { createLogger, transports, format } from "winston";

export const logger = createLogger({
  level: process.env.LOGGER_LEVEL || "info",
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
  transports: [new transports.Console()],
});
