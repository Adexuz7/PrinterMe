const PublicationsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllPublications,
  createPublication,
  getAllComments,
  addComment,
  deletePublication,
  deleteComment
} = require('../controllers/publications.controller')

PublicationsRouter.get('/', checkAuth, getAllPublications)
PublicationsRouter.post('/', checkAuth, createPublication)
PublicationsRouter.get('/:publication/comment', checkAuth, getAllComments)
PublicationsRouter.post('/:publication/comment', checkAuth, addComment)

PublicationsRouter.delete('/:publication/', checkAuth, deletePublication)
PublicationsRouter.delete('/:publication/:comment', checkAuth, deleteComment)

exports.PublicationsRouter = PublicationsRouter
