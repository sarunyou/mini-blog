const request = require("supertest");
const app = require("../app");

it("Route Generate user given valid name should return password", async () => {
  const result = await request(app).post("/v1/users/generate-user").send({
    name: "author",
  });

  console.log(
    "🚀 ~ file: user.route.spec.js ~ line 11 ~ it ~ result.body",
    result.body
  );
  expect(result.status).toBe(200);
  expect(result.body.password).toBeDefined();
});
