const request = require('supertest')
const app = require('../../app')
const { uuid } = require('uuid/v1')

describe('POST /notes', () => {
  let response
  const note = {
    id: uuid,
    text: 'note1'
  }

  beforeAll(() => {
    response = request(app)
      .post('/notes')
      .send(note)
  })

  it('should respond 200', async () => {
    await response.expect(200)
  })

  it('should post note to localStorage', async () => {
    await response
      .expect(res => {
        expect(res.text).toEqual('Hello World!')
      })
  })
})

describe('GET /notes', () => {
  let response

  beforeAll(() => {
    response = request(app).get('/notes')
  })

  it('should respond 200', async () => {
    await response.expect(200)
  })

  it('should return all notes', async () => {
    await response
      .expect(res => {
        expect(res.text).toEqual('Hello World!')
      })
  })
})
