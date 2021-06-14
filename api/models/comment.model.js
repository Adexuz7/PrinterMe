const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  image: [{
    type: String
  }],
  
  description: {
    type: String,
    max: 300
  },
  rate: {
    type: Number,
    min: 0,
    max: 5,
    required: [true, 'Rate is required']
  },
  reports: {
    type: Number
  }
})

exports.CommentModel = mongoose.model('designProducts', commentSchema)
