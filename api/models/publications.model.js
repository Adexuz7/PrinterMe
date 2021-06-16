const mongoose = require('mongoose')

const publicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
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
    userId: {
      type: mongoose.Types.ObjectId,
      required: true
    },
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
    },
    date: Date
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
    }],
    tag: [{
      type: String
    }]
  },
  date: Date
})

exports.PublicationsModel = mongoose.model('publications', publicationSchema)
