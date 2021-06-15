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
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
      },
      message: 'Please enter a valid email'
    },
    required: [true, 'Email required']
  },
  phone: {
    type: Number,
    required: [true, 'Phone number is required'],
    unique: [true, 'This phone number already exists']
  },
  role: {
    type: String,
    enum: ['user', 'seller', 'admin'],
    default: 'user'
  },
  follower: [{
    type: mongoose.Types.ObjectId,
    ref: 'users'
  }],
  follow: [{
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
  report: {
    type: Number
  },
  publication: [{
    type: mongoose.Types.ObjectId,
    ref: 'publications'
  }],
  comment: [{
    type: mongoose.Types.ObjectId,
    ref: 'comments'
  }],
  buyList: [{
    type: mongoose.Types.ObjectId,
    ref: 'sales'
  }],
  seller: {
    rating: {
      type: Number
    },
    salesHistory: [{
      type: mongoose.Types.ObjectId,
      ref: 'sales'
    }],
    printer: [{
      type: mongoose.Types.ObjectId,
      ref: 'printers'
    }],
    designer: {
      type: Boolean
    },
    technical: {
      type: Boolean
    }
  }
})

exports.UserModel = mongoose.model('users', userSchema)
