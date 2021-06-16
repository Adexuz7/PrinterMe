const authRouter = require('express').Router()
const {
  checkAuth
} = require('../../utils')

const {
  signup,
  login,
  whoami
} = require('../controllers/auth.controller')

authRouter
  .get('/whoami', checkAuth, whoami)
  .post('/signup', signup)
  .post('/login', login)

exports.authRouter = authRouter
