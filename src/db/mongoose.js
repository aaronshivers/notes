const mongoose = require('mongoose')

const {
  MONGO_DATABASE,
  MONGO_HOST,
} = process.env

const uri = `mongodb://${ MONGO_HOST }:27017/${ MONGO_DATABASE }`
const encodedUri = encodeURI(uri)

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  dbName: MONGO_DATABASE,
}

const connectToDB = async () => {
  const conn = await mongoose.connect(encodedUri, options)
  console.log(`MongoDB Connected: ${ conn.connection.host } | ${ process.env.MONGO_DATABASE }`)
}

module.exports = connectToDB
