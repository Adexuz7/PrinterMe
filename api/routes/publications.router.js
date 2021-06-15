const PublicationsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllPublications,
  createPublication
} = require('../controllers/publications.controller')

PublicationsRouter.get('/', checkAuth, getAllPublications)
PublicationsRouter.post('/', checkAuth, createPublication)

exports.PublicationsRouter = PublicationsRouter
