const router = require('express').Router()
const { authRouter } = require('./auth.router')
const { groupsRouter } = require('./groups.router')
const { publicationsRouter } = require('./publications.router')
const { printersRouter } = require('./printers.router')
const { profileRouter } = require('./profile.router')
const { salesRouter } = require('./sales.router')
const { userRouter } = require('./users.router')

router
  .use('/auth', authRouter)
  .use('/groups', groupsRouter)
  .use('/payment', salesRouter)
  .use('/publications', publicationsRouter)
  .use('/printers', printersRouter)
  .use('/profile', profileRouter)
  .use('/users', userRouter)

exports.router = router
