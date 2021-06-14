const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'This username already exists']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'This email already exists']
  },
  phone: {
    type: Number,
    required: [true, 'Phone number is required'],
    unique: [true, 'This phone number already exists']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  followers: [{
    type: mongoose.Types.ObjectId,
    ref: 'users'
  }],
  follows: [{
    type: mongoose.Types.ObjectId,
    ref: 'users'
  }],
  userImage: {
    type: String
  },
  bannerImage: {
    type: String
  },
  userDescription: {
    type: String,
    max: 100
  },
  public: {
    type: Boolean,
    default: true
  },
  reports: {
    type: Number
  },
  publications: [{
    type: mongoose.Types.ObjectId,
    ref: 'publications'
  }],
  comments: [{
    type: mongoose.Types.ObjectId,
    ref: 'comments'
  }],
  buyList: [{
    type: mongoose.Types.ObjectId,
    ref: 'sales'
  }]
})

exports.UserModel = mongoose.model('users', userSchema)