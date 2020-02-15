const express = require('express')
const router = express.Router()
const uuidv1 = require('uuid/v1')
const fs = require('fs')

router.post('/notes', (req, res) => {

  try {

    // get text from the body
    const { text } = req.body

    // set user id
    const id = uuidv1()

    // create new note
    const note = { id, text }

    // create notes string
    const notesJSON = JSON.stringify([note])

    // save note
    fs.readFile('./notes.json', (err, results) => {
      console.log(JSON.stringify(results))
    })

    //
    res.status(201).json('hi')

  } catch (e) {
    res.status(400).json(e.message)
  }
})

module.exports = router
