const mongoose = require('mongoose')

const publicationSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Types.ObjectId
  },
  title: {
    type: String,
    max: 30,
    required: [true, 'You have to put a title']
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
  comment: [{
    description: {
      type: String,
      max: 300,
      required: [true, 'Comment description is required']
    },
    rate: {
      type: Number,
      min: 0,
      max: 5,
      required: [true, 'Rate is required']
    },
    image: [{
      type: String
    }],
    report: {
      type: Number
    }
  }],
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

exports.PublicationsModel = mongoose.model('publications', publicationSchema)
