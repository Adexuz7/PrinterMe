const mongoose = require('mongoose')

// Comments
const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  description: {
    type: String,
    required: [true, 'Comment description is required'],
    max: 300
  },
  rate: {
    type: Number,
    required: [true, 'Rate is required'],
    max: 5,
    min: 0
  },
  image: [String],
  report: Number,
  date: Date
})

// Publications
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
  image: [String],
  comment: [commentSchema],
  report: Number,
  type: {
    String,
    enum: ['user', 'seller']
  },
  group: {
    type: mongoose.Types.ObjectId,
    ref: 'groups'
  },
  seller: {
    pubicationRate: Number,
    product: [{
      type: mongoose.Types.ObjectId,
      ref: 'designProducts'
    }],
    service: [{
      type: mongoose.Types.ObjectId,
      ref: 'printServices'
    }],
    tag: [String]
  },
  date: Date
})

exports.PublicationsModel = mongoose.model('publications', publicationSchema)
