const mongoose = require('mongoose')

const sellerPublicationSchema = new mongoose.Schema({
  sellerId: {
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
      type: mongoose.Types.ObjectId,
      ref: 'designProducts'
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
  },
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
})

exports.SellerPublicationsModel = mongoose.model('sellerPublications', sellerPublicationSchema)
