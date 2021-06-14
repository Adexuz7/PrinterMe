const userPublicationRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllUsersPublications,
  createUserPublication
} = require('../controllers/usersPublications.controller')

userPublicationRouter.get('/', checkAuth, getAllUsersPublications)
userPublicationRouter.post('/', createUserPublication)

exports.userPublicationRouter = userPublicationRouter
