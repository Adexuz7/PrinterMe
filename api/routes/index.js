const router = require('express').Router()
const { userRouter } = require('./users.router')
const { authRouter } = require('./auth.router')

router
  .use('/users', userRouter)
  .use('/auth', authRouter)

exports.router = router