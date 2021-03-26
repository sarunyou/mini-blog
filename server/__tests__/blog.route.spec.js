const request = require("supertest");
const app = require("../app");
const faker = require("faker");
const { StatusCodes } = require("http-status-codes");
const blogService = require("../services/blog.service");
jest.mock("../middlewares/authentication", () => {
  return {
    authenticateToken: jest.fn((req, res, next) => {
      next();
    }),
  };
});

describe("Blog routes", () => {
  test("Route list blogs should return blogs", async () => {
    blogService.listBlogs = jest.fn();
    const result = await request(app).get("/v1/blogs");
    expect(result.status).toBe(StatusCodes.OK);
    expect(blogService.listBlogs).toHaveBeenCalled();
  });

  test("Route update blog given valid blogId should return success", async () => {
    blogService.updateBlogById = jest.fn();
    const blogId = faker.datatype.number();
    const result = await request(app).patch(`/v1/blogs/${blogId}`).send({
      name: faker.internet.userName(),
      status: faker.datatype.number(),
      content: faker.lorem.paragraph(),
      category: faker.commerce.productMaterial(),
    });
    expect(result.status).toBe(StatusCodes.OK);
    expect(blogService.updateBlogById).toHaveBeenCalled();
  });

  test("Route delete blog given valid blogId should return success", async () => {
    blogService.deleteBlogById = jest.fn();
    const blogId = faker.datatype.number();
    const result = await request(app).delete(`/v1/blogs/${blogId}`);
    expect(result.status).toBe(StatusCodes.OK);
    expect(blogService.deleteBlogById).toHaveBeenCalled();
  });

  test("Route create blog given valid body should return success", async () => {
    blogService.createBlog = jest.fn();
    const result = await request(app).post(`/v1/blogs`).send({
      name: faker.internet.userName(),
      status: faker.datatype.number(),
      content: faker.lorem.paragraph(),
      category: faker.commerce.productMaterial(),
    });
    expect(result.status).toBe(StatusCodes.CREATED);
    expect(blogService.createBlog).toHaveBeenCalled();
  });
});
