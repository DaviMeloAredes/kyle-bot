import mongoose from 'mongoose'

const serverSchema = new mongoose.Schema({
  sv_id: { type: String, required: true },
  users: [
    {
      id: { type: String, required: true },
      images: [
        {
          image_link: { type: String, required: true }
        }
      ]
    }
  ]
})

const model = mongoose.model('server', serverSchema)

export { model }
