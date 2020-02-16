const expect = require('expect')
const request = require('supertest')

const app = require('../../app')
const Note = require('../../models/notes')

describe('POST /notes', () => {
  const note = {
    text: 'note1'
  }

  it('should respond 201', async () => {
    await request(app)
      .post('/notes')
      .send(note).expect(201)
  })

  it('should post note to db', async () => {
    await request(app)
      .post('/notes')
      .send(note)
      .expect(res => {
        expect(res.text).toContain(note.text)
      })

    const foundNote = await Note.findOne(note)
    expect(foundNote).toBeTruthy()
    expect(foundNote.text).toEqual(note.text)
  })
})

// describe('GET /notes', () => {
//   let response
//
//   beforeAll(() => {
//     response = request(app).get('/notes')
//   })
//
//   it('should respond 200', async () => {
//     await response.expect(200)
//   })
//
//   it('should return all notes', async () => {
//     await response
//       .expect(res => {
//         expect(res.text).toEqual('Hello World!')
//       })
//   })
// })
