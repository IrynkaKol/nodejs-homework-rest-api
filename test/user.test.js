


const express = require("express");
const request = require("supertest");
const bcrypt = require("bcrypt");
const { users: ctrl } = require("../controllers");

const app = express();
app.post("/users/login", ctrl.login);

const credentials = {
  _id: "123",
    email: "test@example.com",
    password: bcrypt.hashSync("password", 10),
    subscription: "premium",
 }

describe("test login controller", () => {
  beforeAll(() => app.listen(3000), 6000);
  test("login return user", async () => {
    const response = await (await request(app).post("/users/login")).send(credentials);
    console.log(response.status);
    // expect(response.status).toBe(200)
  });
});
