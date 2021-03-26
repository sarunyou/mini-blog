const request = require("supertest");
const app = require("../app");
const faker = require("faker");
const authService = require("../services/auth.service");

test("Route Sing in user given name should return token", async () => {
  const token = "1234";
  authService.singIn = jest.fn().mockResolvedValue(token);
  const result = await request(app).post("/v1/auth/sign-in").send({
    name: faker.name.firstName(),
    password: faker.internet.password(),
  });
  expect(result.status).toBe(200);
});

test("Route Sing in user given invalid input should return error", async () => {
  const token = "1234";
  authService.singIn = jest.fn().mockResolvedValue(token);
  const result = await request(app).post("/v1/auth/sign-in").send({});
  expect(result.status).toBe(400);
});
