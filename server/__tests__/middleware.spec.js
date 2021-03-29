const authorizationMiddleware = require("../middlewares/authentication");
const faker = require("faker");
const app = require("../app");
const request = require("supertest");
const userService = require("../services/user.service");
const createHttpError = require("http-errors");
describe("middleware", () => {
  let mockRequest = {};
  let mockResponse = {};
  let mockNext = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockNext = jest.fn();
  });

  test("authenticateToken given valid token should call next function", async () => {
    userService.getUserByUsername = jest.fn().mockResolvedValue({
      id: faker.datatype.number(),
      isSamePassword: () => true,
    });

    const result = await request(app).post("/v1/auth/sign-in").send({
      username: faker.name.firstName(),
      password: faker.internet.password(),
    });

    expect(result.body).toHaveProperty("accessToken");

    mockRequest = {
      headers: {
        authorization: `Bearer ${result.body.accessToken}`,
      },
    };

    authorizationMiddleware.authenticateToken(
      mockRequest,
      mockResponse,
      mockNext
    );

    expect(mockNext).toHaveBeenCalled();
    expect(mockRequest).toHaveProperty("user");
  });

  test("authenticateToken given no token should throw error", async () => {
    mockRequest = {
      headers: {
        authorization: "",
      },
    };

    authorizationMiddleware.authenticateToken(
      mockRequest,
      mockResponse,
      mockNext
    );

    expect(mockNext).toHaveBeenCalledWith(new createHttpError.Unauthorized());
  });
});
