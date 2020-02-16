const express = require('express')
const router = express.Router()

const Note = require('../../models/notes')

router.post('/notes', async (req, res) => {

  try {

    // get text from the body
    const { text } = req.body

    // create new note
    const note = new Note({ text })

    // save note
    await note.save()

    // return saved note
    res.status(201).json(note)

  } catch (error) {

    // return error message
    res.status(400).json(error.message)
  }
})

router.get('/notes', async (req, res) => {

  try {

    // find all notes
    const notes = await Note.find()

    // return notes
    res.status(200).json(notes)

  } catch (error) {

    // return error message
    res.status(400).json(error.message)
  }
})

module.exports = router
