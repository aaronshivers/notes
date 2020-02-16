require('dotenv').config()

const express = require('express')
const app = express()
const db = require('./db/mongoose')

db()

const indexRoutes = require('./routes/index/index')
const notesRoutes = require('./routes/notes/notes')

app.use(express.json())

app.use(indexRoutes)
app.use(notesRoutes)

module.exports = app
