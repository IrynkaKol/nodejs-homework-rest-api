const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const { DB_HOST} = process.env;

describe("Tests for login controller /users/login", () => {
  beforeAll(async () => {
    await mongoose
      .connect(DB_HOST) 
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((error) => {
        console.log(error.massage);
      });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("test login controller", async () => {
    const credentials = {
      email: "test@gmail.com",
      password: "123456",
    };
    const response = await request(app).post("/users/login").send(credentials);
    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
    expect(response.body.user).toBeDefined();
    expect(response.body.user.email).toBe("test@gmail.com");
    expect(response.body.user.subscription).toBe("starter");
    expect(typeof response.body.user.email).toBe("string");
    expect(typeof response.body.user.subscription).toBe("string");
  });
});
