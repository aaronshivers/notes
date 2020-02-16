const mongoose = require('mongoose')

const {
  MONGO_DB_NAME,
  MONGO_SERVER,
} = process.env

const uri = `mongodb://${ MONGO_SERVER }`
const encodedUri = encodeURI(uri)

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  dbName: MONGO_DB_NAME,
}

const db = async () => {
  const conn = await mongoose.connect(encodedUri, options)
  console.log(`MongoDB Connected: ${ conn.connection.host } | ${ process.env.MONGO_DB_NAME }`)
}

module.exports = db
