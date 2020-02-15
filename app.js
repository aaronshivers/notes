const express = require('express')
const app = express()

const PORT = 3000

const indexRoutes = require('./routes/index/index')

app.use(indexRoutes)

app.listen(PORT, () => console.log(`Listening on port ${ PORT }`))

module.exports = app
