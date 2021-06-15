const mongoose = require('mongoose')

const designProductSchema = new mongoose.Schema({
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
  tag: [{
    type: String
  }],
  type: {
    type: String,
    enum: ['Collectables', 'Technical']
  },
  image: [{
    type: String
  }]
})

exports.DesignProductModel = mongoose.model('designProducts', designProductSchema)
