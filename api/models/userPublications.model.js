const mongoose = require('mongoose')

const userPublicationSchema = new mongoose.Schema({
  description: {
    type: String,
    max: 300,
    required: [true, 'You have to put a description']
  },
  image: {
    type: Array,
    items: {
      type: String
    }
  },
  comments: {
    type: Array,
    items: {
      type: mongoose.Types.ObjectId,
      ref: 'comments'
    }
  },
  report: {
    type: Number
  }
})

exports.UserPublicationModel = mongoose.model('userPublications', userPublicationSchema)
