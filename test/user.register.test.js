const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

const { DB_HOST} = process.env;

describe("test for register controller /users/register", () => {
    // let server = null;
  beforeAll(async () => {
     // server = app.listen(PORT);
    await mongoose.connect(DB_HOST)
    
  });
  afterAll(async () => {
 // server.close();
    await mongoose.connection.close();
    
  });

  test("test register controller", async () => {
    const credentials = {
      email: "test1@gmail.com",
      password: "123456"
    };
    const response = await request(app).post("/users/register").send(credentials);
    expect(response.statusCode).toBe(201);
    expect(response.body.user.email).toBe(credentials.email);
  });
});
