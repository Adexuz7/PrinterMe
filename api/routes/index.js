const router = require('express').Router()
const { userRouter } = require('./users.router')
const { PublicationsRouter } = require('./publications.router')
const { authRouter } = require('./auth.router')

router
  .use('/users', userRouter)
  .use('/publications', PublicationsRouter)
  .use('/auth', authRouter)

exports.router = router
