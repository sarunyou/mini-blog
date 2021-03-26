const request = require("supertest");
const app = require("../app");
const userService = require("../services/user.service");

it("Route Generate user given valid name should return password", async () => {
  userService.generateUserByName = jest.fn().mockReturnValue({
    password: "12345",
  });
  const result = await request(app).post("/v1/users").send({
    name: "author",
  });

  expect(result.status).toBe(200);
  expect(userService.generateUserByName).toHaveBeenCalled();
  expect(result.body.password).toBeDefined();
});

it("Route Generate user given invalid name should return error", async () => {
  userService.generateUserByName = jest.fn().mockReturnValue({
    password: "12345",
  });
  const result = await request(app).post("/v1/users/generate-user").send({});

  expect(result.status).toBe(400);
});
