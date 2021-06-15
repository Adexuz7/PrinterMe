const PublicationsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllPublications,
  createPublication,
  getAllComments,
  addComment
} = require('../controllers/publications.controller')

PublicationsRouter.get('/', checkAuth, getAllPublications)
PublicationsRouter.post('/', checkAuth, createPublication)
PublicationsRouter.get('/:publication/comment', checkAuth, getAllComments)
PublicationsRouter.post('/:publication/comment', checkAuth, addComment)

exports.PublicationsRouter = PublicationsRouter
