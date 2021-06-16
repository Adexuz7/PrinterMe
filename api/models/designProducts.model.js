const mongoose = require('mongoose')

const designProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    max: 300
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  type: {
    type: String,
    enum: ['Collectable', 'Technical'],
    required: [true, 'You should tell what type of product you are selling']
  },
  image: [{
    type: String
  }],
  size: Number
})

exports.DesignProductModel = mongoose.model('designProducts', designProductSchema)
