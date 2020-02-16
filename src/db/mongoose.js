const mongoose = require('mongoose')

const {
  MONGO_DATABASE,
  MONGO_SERVER,
} = process.env

const uri = `mongodb://mongo:27017`
const encodedUri = encodeURI(uri)

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  dbName: MONGO_DATABASE,
}

const db = async () => {
  const conn = await mongoose.connect(encodedUri, options)
  console.log(`MongoDB Connected: ${ conn.connection.host } | ${ process.env.MONGO_DATABASE }`)
}

module.exports = db
