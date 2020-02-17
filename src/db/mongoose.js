const mongoose = require('mongoose')

const {
  MONGO_DATABASE,
  MONGO_HOST,
  MONGODB_URI,
} = process.env

const uri = `mongodb://${ MONGO_HOST }:27017/${ MONGO_DATABASE }`
const encodedUri = process.env.NODE_ENV !== 'production' ? MONGODB_URI : encodeURI(uri)

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  dbName: MONGO_DATABASE,
}

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(encodedUri, options)
    console.log(`MongoDB Connected: ${ conn.connection.host } | ${ process.env.MONGO_DATABASE }`)

  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connectToDB
