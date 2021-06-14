const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  image: [{
    type: String
  }],
  
  description: {
    type: String,
    required: [true, 'Description is required'],
    max: 300
  },
})

exports.CommentModel = mongoose.model('designProducts', commentSchema)
