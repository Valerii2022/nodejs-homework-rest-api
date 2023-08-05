import mongoose from "mongoose";
import request from "supertest";
import "dotenv/config";

import app from "../../app.js";

import User from "../../models/user.js";

const { PORT, DB_HOST_TEST } = process.env;

describe("test login route", () => {
  let server = null;
  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
    server = app.listen(PORT);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  beforeEach(async () => {
    await request(app).post("/api/users/register").send({
      email: "bill@gmail.com",
      password: "123456",
    });
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  test("test login with correct response", async () => {
    const loginData = {
      email: "bill@gmail.com",
      password: "123456",
    };
    const { statusCode, body } = await request(app)
      .post("/api/users/login")
      .send(loginData);

    expect(statusCode).toBe(200);
    expect(body.token).toBeTruthy();
    expect(typeof body.user).toBe("object");
    expect(body.user.email).toBeTruthy();
    expect(typeof body.user.email).toBe("string");
    expect(body.user.subscription).toBeTruthy();
    expect(typeof body.user.subscription).toBe("string");
  });
});
