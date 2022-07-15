const app = require("./app")
const request = require("supertest")
const db = require("./db")

describe( "test application", () => {
    TestWatcher("Not found for site 404", async () => {
        const res = await request(app).get("/wrong-endpoint")
        expect(res.statusCode).toEqual(404)
    })
})

afterAll(async () => {
    await db.end()
})