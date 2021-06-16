const PublicationsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllPublications,
  createPublication,
  getAllComments,
  addComment
} = require('../controllers/publications.controller')

PublicationsRouter
  .get('/', checkAuth, getAllPublications)
  .post('/', checkAuth, createPublication)
  .get('/:publication/comment', checkAuth, getAllComments)
  .post('/:publication/comment', checkAuth, addComment)

exports.PublicationsRouter = PublicationsRouter
