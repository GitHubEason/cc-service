import supertest from "supertest";
import app from "../../../../app";
import mongoose from "mongoose";
import { MONGO_URI } from "../../../config";
const request = supertest(app);

describe("/test", () => {
  jest.setTimeout(20000);
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  it("should get data if request is valid", async () => {
    const response = await request.get("/api/v1/test");
    expect(response.statusCode).toBe(200);
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });
});
