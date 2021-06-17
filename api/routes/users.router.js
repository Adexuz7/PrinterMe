const userRouter = require('express').Router()
const {
  checkAuth,
  isAdmin
} = require('../../utils')

const {
  getAllUsers,
  createUser,
  userTimeline,
  followUser,
  getUser,
  deleteUser,
  getAllSellers,
  addUserPrinter,
  removeUserPrinter
} = require('../controllers/users.controller')

userRouter
  .get('/', checkAuth, isAdmin, getAllUsers)
  .post('/', checkAuth, createUser)
  .delete('/delete', checkAuth, deleteUser)
  .get('/timeline', checkAuth, userTimeline)
  .get('/:userid', checkAuth, getUser)
  .put('/:userid', checkAuth, followUser)
  .get('/sellers', checkAuth, getAllSellers)
  .put('/printer', checkAuth, addUserPrinter)
  .delete('/printer', checkAuth, removeUserPrinter)

exports.userRouter = userRouter
