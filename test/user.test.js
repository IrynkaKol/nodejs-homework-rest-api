const express = require("express");
const request = require("supertest");
const { users: ctrl } = require("../controllers");

const app = express();
app.post("/users/register", ctrl.register);

beforeAll(() => app.listen(3000));


describe("test register controller", () => {
  test("register return user", async () => {
    const response = await request(app).post("/user/register");
    console.log(response.status);
    // expect(response.status).toBe(200)
  });
});
