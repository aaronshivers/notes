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

  } catch (e) {

    // return error message
    res.status(400).json(e.message)
  }
})

module.exports = router
