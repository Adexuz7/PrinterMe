const router = require('express').Router()
const { userRouter } = require('./users.router')
const { userPublicationsRouter } = require('./userPublications.router')
const { sellerPublicationsRouter } = require('./sellerPublications.router')
const { authRouter } = require('./auth.router')

router
  .use('/users', userRouter)
  .use('/user_publications', userPublicationsRouter)
  .use('/seller_publications', sellerPublicationsRouter)
  .use('/auth', authRouter)

exports.router = router
