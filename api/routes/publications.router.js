const PublicationsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllUsersPublications,
  createUserPublication
} = require('../controllers/publications.controller')

PublicationsRouter.get('/', checkAuth, getAllUsersPublications)
PublicationsRouter.post('/', checkAuth, createUserPublication)

exports.PublicationsRouter = PublicationsRouter
