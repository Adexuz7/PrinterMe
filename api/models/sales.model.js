const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
  designProduct: {
    type: mongoose.Types.ObjectId,
    ref: 'designProducts',
    required: true
  },
  printService: {
    type: mongoose.Types.ObjectId,
    ref: 'printServices',
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  shipment: {
    type: Boolean
  },
  date: {
    type: Date
  },
  buyerId: {
    type: mongoose.Types.ObjectId,
    ref: 'users'
  }
})

exports.SaleModel = mongoose.model('sales', saleSchema)
