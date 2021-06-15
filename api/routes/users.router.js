const userRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllUsers,
  createUser,
  userTimeline,
  followUser,
  getUser,
  deleteUser,
  getAllSellers
} = require('../controllers/users.controller')

userRouter
  .get('/', checkAuth, getAllUsers)
  .get('/timeline', checkAuth, userTimeline)
  .get('/sellers', checkAuth, getAllSellers)
  .get('/:userid', checkAuth, getUser)
  .post('/', checkAuth, createUser)
  .put('/:userid', checkAuth, followUser)
  .delete('/delete', checkAuth, deleteUser)

exports.userRouter = userRouter
