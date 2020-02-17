if (process.env === 'test') {
  require('dotenv').config()
}

const express = require('express')
const app = express()

// connect to database
require('./db/mongoose')()

const indexRoutes = require('./routes/index/index')
const notesRoutes = require('./routes/notes/notes')

app.use(express.json())

app.use(indexRoutes)
app.use(notesRoutes)

module.exports = app
