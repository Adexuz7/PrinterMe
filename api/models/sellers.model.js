const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'users'
  },
  rating: {
    type: Number
  },
  sellerPublications: [{
    type: mongoose.Types.ObjectId,
    ref: 'sellerPublication'
  }],
  salesHistory: [{
    type: mongoose.Types.ObjectId,
    ref: 'sales'
  }],
  printers: [{
    type: mongoose.Types.ObjectId,
    ref: 'printers'
  }],
  designer: {
    type: Boolean
  },
  technical: {
    type: Boolean
  }
})

exports.SellerModel = mongoose.model('sellers', sellerSchema)
