const router = require('express').Router()
const { userRouter } = require('./users.router')
const { profileRouter } = require('./profile.router')
const { PublicationsRouter } = require('./publications.router')
const { authRouter } = require('./auth.router')
const { printersRouter } = require('./printers.router')

router
  .use('/users', userRouter)
  .use('/profile', profileRouter)
  .use('/publications', PublicationsRouter)
  .use('/auth', authRouter)
  .use('/printers', printersRouter)

exports.router = router
