const userRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllUsers,
  createUser
} = require('../controllers/users.controller')

userRouter.get('/', checkAuth, getAllUsers)
userRouter.post('/', createUser)

exports.userRouter = userRouter
