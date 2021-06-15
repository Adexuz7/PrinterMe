const userRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllUsers,
  createUser,
  userTimeline,
  followUser,
  getUser
} = require('../controllers/users.controller')

userRouter
  .get('/', checkAuth, getAllUsers)
  .get('/timeline', checkAuth, userTimeline)
  .get('/:userid', checkAuth, getUser)
  .post('/', checkAuth, createUser)
  .put('/:userid', checkAuth, followUser)

exports.userRouter = userRouter
