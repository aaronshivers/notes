const expect = require('expect')
const request = require('supertest')

const app = require('../../app')
const Note = require('../../models/notes')

describe('/notes', () => {
  const note = {
    text: 'note1',
  }

  describe('POST /notes', () => {

    it('should respond 201', async () => {
      await request(app)
        .post('/notes')
        .send(note)
        .expect(201)
    })

    it('should post note to db', async () => {
      await request(app)
        .post('/notes')
        .send(note)
        .expect(res => expect(res.text).toContain(note.text))

      const foundNote = await Note.findOne(note)
      expect(foundNote).toBeTruthy()
      expect(foundNote.text).toEqual(note.text)
    })
  })

  describe('GET /notes', () => {

    it('should respond 200', async () => {
      await request(app)
        .get('/notes')
        .expect(200)
    })

    it('should return all notes', async () => {
      await request(app)
        .get('/notes')
        .expect(res => {
          expect(res.text).toContain(note.text)
      })
    })
  })
})
