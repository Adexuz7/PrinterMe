const userRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllUsers,
  createUser,
  userTimeline,
  followUser,
  getUser,
  getAllSellers,
  addUserPrinter,
  removeUserPrinter
} = require('../controllers/users.controller')

userRouter
  .get('/', checkAuth, getAllUsers)
  .get('/timeline', checkAuth, userTimeline)
  .get('/sellers', checkAuth, getAllSellers)
  .get('/:userid', getUser)
  .post('/', createUser)
  .put('/printer', checkAuth, addUserPrinter)
  .put('/:userid', checkAuth, followUser)
  .delete('/printer', checkAuth, removeUserPrinter)

exports.userRouter = userRouter
