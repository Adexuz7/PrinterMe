const profileRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getUserData,
  editUserData
} = require('../controllers/profile.controller')

profileRouter
  .get('/', checkAuth, getUserData)
  .patch('/', checkAuth, editUserData)

exports.profileRouter = profileRouter
