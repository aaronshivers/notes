const request = require('supertest')
const app = require('../../app')

describe('GET /', () => {

  afterAll(async () => await mongoose.connection.close())

  it('should respond 200', async () => {
    await request(app).get('/').expect(200)
  })

  it('should display `Hello World!`', async () => {
    await request(app)
      .get('/')
      .expect(res => {
        expect(res.text)
          .toEqual(JSON.stringify({"message":"Hello World!"}))
      })
  })
})
