const router = require('express').Router()
const { userRouter } = require('./users.router')
const { userPublicationRouter } = require('./userPublications.router')
const { authRouter } = require('./auth.router')

router
  .use('/users', userRouter)
  .use('/publications', userPublicationRouter)
  .use('/auth', authRouter)

exports.router = router
