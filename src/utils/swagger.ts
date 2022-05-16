import swaggerJSDoc from "swagger-jsdoc";

export const swaggerDoc = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "cc-service",
      description: "",
      version: "1.0.0",
    },
  },
  apis: ["src/controllers/*.ts"],
});
