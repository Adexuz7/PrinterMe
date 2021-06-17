const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
  designProduct: {
    type: mongoose.Types.ObjectId,
    ref: 'designProducts'
  },
  printService: {
    type: mongoose.Types.ObjectId,
    ref: 'printServices'
  },
  quantity: {
    type: Number,
    required: true
  },
  shipment: {
    type: Boolean
  },
  date: Date,
  buyerId: {
    type: mongoose.Types.ObjectId,
    ref: 'users'
  }
})

exports.SaleModel = mongoose.model('sales', saleSchema)
