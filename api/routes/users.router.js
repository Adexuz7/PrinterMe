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
  .get('/timeline', checkAuth, userTimeline)
  .get('/sellers', checkAuth, getAllSellers)
  .get('/:userid', checkAuth, getUser)
  .post('/', checkAuth, createUser)
  .put('/printer', checkAuth, addUserPrinter)
  .put('/:userid', checkAuth, followUser)
  .delete('/delete', checkAuth, deleteUser)
  .delete('/printer', checkAuth, removeUserPrinter)
exports.userRouter = userRouter
