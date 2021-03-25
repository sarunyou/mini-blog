const request = require("supertest")
const app = require("../../app")

it("Route Generate user given name should return password", async () => {
    await request(app)
    .post('/v1/auth/generate-user')
    .send({
        userName: "author"
    })
    .expect(200)
})

it("Route Sing in user given name should return password", async () => {
    await  request(app)
    .post('/v1/auth/sign-in')
    .send({
        userName: "author",
        password: "1234234"
    })
    .expect(200)
})