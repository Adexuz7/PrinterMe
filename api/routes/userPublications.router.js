const userPublicationsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllUsersPublications,
  createUserPublication
} = require('../controllers/usersPublications.controller')

userPublicationsRouter.get('/', checkAuth, getAllUsersPublications)
userPublicationsRouter.post('/', createUserPublication)

exports.userPublicationsRouter = userPublicationsRouter
