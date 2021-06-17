const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: [true, 'Group name is required'],
    unique: true
  },
  description: {
    type: String,
    max: 300,
    required: [true, 'You have to put a description']
  },
  image: [{
    type: String
  }],
  moderator: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
    required: true
  },
  groupUsers: [{
    type: mongoose.Types.ObjectId,
    ref: 'users'
  }],
  groupPublications: [{
    type: mongoose.Types.ObjectId,
    ref: 'publications'
  }],
  report: {
    type: Number
  }
})

exports.GroupsModel = mongoose.model('groups', groupSchema)
