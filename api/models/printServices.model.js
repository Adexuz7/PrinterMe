const mongoose = require('mongoose')

const printServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    max: 500
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  printer: [{
    type: mongoose.Types.ObjectId,
    ref: 'printers'
  }],
  type: {
    type: String,
    enum: ['Collectables', 'Technical']
  },
  image: [{
    type: String
  }]
})

exports.PrintServiceModel = mongoose.model('printServices', printServiceSchema)
