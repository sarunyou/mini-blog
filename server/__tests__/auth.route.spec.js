const request = require("supertest");
const app = require("../app");
const authService = require("../services/auth.service");

it("Route Sing in user given name should return token", async () => {
  const token = "1234";
  authService.singIn = jest.fn().mockResolvedValue(token);
  const result = await request(app).post("/v1/auth/sign-in").send({
    name: "author",
    password: "1234234",
  });
  expect(result.status).toBe(200);
});

it("Route Sing in user given invalid input should return error", async () => {
  const token = "1234";
  authService.singIn = jest.fn().mockResolvedValue(token);
  const result = await request(app).post("/v1/auth/sign-in").send({
    password: "1234234",
  });
  expect(result.status).toBe(400);
});
