const mongoose = require('mongoose')

const userPublicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
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

exports.UserPublicationsModel = mongoose.model('userPublications', userPublicationSchema)
