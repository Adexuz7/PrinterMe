const authRouter = require('express').Router()
const { checkAuth } = require('../../utils')
const {
  signup,
  login,
  whoami
} = require('../controllers/auth.controller')

authRouter.get('/whoami', checkAuth, whoami)
authRouter.post('/signup', signup)
authRouter.post('/login', login)

exports.authRouter = authRouter
