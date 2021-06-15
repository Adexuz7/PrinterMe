const PublicationsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllPublications,
  createPublication,
  addComment
} = require('../controllers/publications.controller')

PublicationsRouter.get('/', checkAuth, getAllPublications)
PublicationsRouter.post('/', checkAuth, createPublication)
PublicationsRouter.post('/:publication/comment', checkAuth, addComment)

exports.PublicationsRouter = PublicationsRouter
