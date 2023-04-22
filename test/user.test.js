const express = require("express");
const request = require("supertest");
const { users: ctrl } = require("../controllers");

const app = express();
app.post("/users/login", ctrl.login);

describe("test login controller", () => {
  beforeAll(() => app.listen(3000));
  test("login return user", async () => {
    const response = await request(app).post("/users/login");
    console.log(response.status);
    // expect(response.status).toBe(200)
  });
});
