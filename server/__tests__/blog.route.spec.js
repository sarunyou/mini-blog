const request = require("supertest");
const app = require("../app");
const { StatusCodes } = require("http-status-codes");
const blogService = require("../services/blog.service");
it("Route list blogs should return blogs", async () => {
  blogService.listBlogs = jest.fn();
  const result = await request(app).get("/v1/blogs");
  expect(result.status).toBe(StatusCodes.OK);
  expect(blogService.listBlogs).toHaveBeenCalled();
});

it("Route update blog given valid blogId should return success", async () => {
  blogService.updateBlogById = jest.fn();
  const blogId = 1;
  const result = await request(app).patch(`/v1/blogs/${blogId}`).send({
    name: "test",
    status: 1,
    content: "111",
    category: "aa",
  });
  expect(result.status).toBe(StatusCodes.OK);
  expect(blogService.updateBlogById).toHaveBeenCalled();
});

it("Route delete blog given valid blogId should return success", async () => {
  blogService.deleteBlogById = jest.fn();
  const blogId = 1;
  const result = await request(app).delete(`/v1/blogs/${blogId}`);
  expect(result.status).toBe(StatusCodes.OK);
  expect(blogService.deleteBlogById).toHaveBeenCalled();
});

it("Route create blog given valid body should return success", async () => {
  blogService.createBlog = jest.fn();
  const result = await request(app).post(`/v1/blogs`).send({
    name: "test",
    status: 1,
    content: "111",
    category: "aa",
  });
  expect(result.status).toBe(StatusCodes.CREATED);
  expect(blogService.createBlog).toHaveBeenCalled();
});
