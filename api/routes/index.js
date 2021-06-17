const router = require('express').Router()
const { userRouter } = require('./users.router')
const { profileRouter } = require('./profile.router')
const { publicationsRouter } = require('./publications.router')
const { authRouter } = require('./auth.router')
const { printersRouter } = require('./printers.router')
const { groupsRouter } = require('./groups.router')
const { salesRouter } = require('./sales.router')

router
  .use('/users', userRouter)
  .use('/profile', profileRouter)
  .use('/publications', publicationsRouter)
  .use('/auth', authRouter)
  .use('/printers', printersRouter)
  .use('/groups', groupsRouter)
  .use('/payment', salesRouter)

exports.router = router
