const request = require('supertest')
const app = require('../../app')

describe('GET /', () => {
  let response

  beforeAll(() => {
    response = request(app).get('/')
  })

  it('should respond 200', async () => {
    await response.expect(200)
  })

  it('should display `Hello World!`', async () => {
    await response
      .expect(res => {
        expect(res.text).toEqual('Hello World!')
      })
  })
})
