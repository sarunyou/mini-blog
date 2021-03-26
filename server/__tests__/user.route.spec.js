const request = require("supertest");
const app = require("../app");
const faker = require("faker");
const userService = require("../services/user.service");
const { StatusCodes } = require("http-status-codes");

jest.mock("../middlewares/authentication", () => {
  return {
    authenticateToken: jest.fn((req, res, next) => {
      req.user = {};
      next();
    }),
  };
});

test("Route Generate user given valid name should return password", async () => {
  userService.generateUserByName = jest.fn().mockReturnValue({
    password: faker.internet.password(),
  });
  const result = await request(app).post("/v1/users").send({
    name: faker.internet.userName(),
  });

  expect(result.status).toBe(StatusCodes.OK);
  expect(userService.generateUserByName).toHaveBeenCalled();
  expect(result.body.password).toBeDefined();
});

test("Route Generate user given invalid name should return error", async () => {
  userService.generateUserByName = jest.fn().mockReturnValue({
    password: faker.internet.password(),
  });
  const result = await request(app).post("/v1/users").send({});

  expect(result.status).toBe(StatusCodes.BAD_REQUEST);
});

test("Route get Me given valid jwt should return me user", async () => {
  userService.getUserByName = jest.fn().mockReturnValue({
    name: faker.internet.userName(),
    password: faker.internet.password(),
  });
  const result = await request(app).get("/v1/users/me");
  expect(userService.getUserByName).toHaveBeenCalled();
  expect(result.status).toBe(StatusCodes.OK);
});
