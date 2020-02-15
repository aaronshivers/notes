const express = require('express')
const app = express()

const indexRoutes = require('./routes/index/index')
const notesRoutes = require('./routes/notes/notes')

app.use(express.json())

app.use(indexRoutes)
app.use(notesRoutes)

module.exports = app
