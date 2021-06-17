const PublicationsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllPublications,
  createPublication,
  getAllComments,
  addComment,
  deletePublication,
  deleteComment,
  updatePublication
} = require('../controllers/publications.controller')

PublicationsRouter.get('/', getAllPublications)
PublicationsRouter.post('/', checkAuth, createPublication)
PublicationsRouter.get('/:publication/comments', checkAuth, getAllComments)
PublicationsRouter.post('/:publication/comments', checkAuth, addComment)

PublicationsRouter.put('/:publication/', checkAuth, updatePublication)

PublicationsRouter.delete('/:publication/', checkAuth, deletePublication)
PublicationsRouter.delete('/:publication/:comment', checkAuth, deleteComment)

exports.PublicationsRouter = PublicationsRouter
