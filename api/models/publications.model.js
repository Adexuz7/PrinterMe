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
  comment: {
    type: Array,
    items: {
      type: mongoose.Types.ObjectId,
      ref: 'comments'
    }
  },
  report: {
    type: Number
  },
  type: {
    String,
    enum: ['user', 'seller']
  },
  seller: {
    pubicationRate: {
      type: Number
    },
    product: [{
      type: mongoose.Types.ObjectId,
      ref: 'designProducts'
    }],
    service: [{
      type: mongoose.Types.ObjectId,
      ref: 'printServices'
    }]
  }
})

exports.UserPublicationsModel = mongoose.model('userPublications', userPublicationSchema)
