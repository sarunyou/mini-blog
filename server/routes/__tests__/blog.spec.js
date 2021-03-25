const request = require("supertest")
const app = require("../../app")

it("Route list blogs should return blogs", async () => {
    await request(app)
    .get('/v1/blogs')
    .expect(200)
})
