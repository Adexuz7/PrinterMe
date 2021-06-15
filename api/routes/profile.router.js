const profileRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getUserData
} = require('../controllers/profile.controller')

profileRouter
  .get('/', checkAuth, getUserData)

exports.profileRouter = profileRouter
