import supertest from "supertest";
import app from "../../../../app";
// import mongoose from "mongoose";

const request = supertest(app);

// mongoose.connect(global.__MONGO_URI__);

describe("/test", () => {
  it("should get data if request is valid", async () => {
    const response = await request.get("/api/v1/test");
    expect(response.statusCode).toBe(200);
  });
});
