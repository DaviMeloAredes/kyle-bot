import 'dotenv/config'
import mongoose from 'mongoose'

export default async () => {
  const uri = `mongodb+srv://${process.env.MONGO_USER_USERNAME}:${process.env.MONGO_USER_PASSWORD}@cluster0.z1mrw.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
  mongoose.connect(uri)
}
