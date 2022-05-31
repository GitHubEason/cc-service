import type { Config } from "@jest/types";
import { defaults as tsjPreset } from "ts-jest/presets";
const config: Config.InitialOptions = {
  transform: tsjPreset.transform,
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/__tests__/**/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{tsx,ts}",
    "!<rootDir>/app.ts",
    "!<rootDir>/index.ts",
    "!<rootDir>/src/config/*.{tsx,ts}",
    "!<rootDir>/src/utils/*.{tsx,ts}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/**/__tests__/**",
    "!<rootDir>/**/*.d.ts",
  ],
  verbose: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
export default config;
