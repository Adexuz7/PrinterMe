const publicationsRouter = require('express').Router()
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

const {
  createProducts,
  createServices,
  modifyProducts,
  modifyServices,
  deleteProducts,
  deleteServices
} = require('../controllers/products.controller')

publicationsRouter
  .get('/', checkAuth, getAllPublications)
  .post('/', checkAuth, createPublication)
  .put('/:publication/', checkAuth, updatePublication)
  .delete('/:publication', checkAuth, deletePublication)
  .post('/:publication/comments', checkAuth, addComment)
  .get('/:publication/comments', checkAuth, getAllComments)
  .delete('/:publication/coments/:comment', checkAuth, deleteComment)
  .post('/products', checkAuth, createProducts)
  .post('/services', checkAuth, createServices)
  .put('/products/:productid', checkAuth, modifyProducts)
  .put('/services/:serviceid', checkAuth, modifyServices)
  .delete('/products/:productid', checkAuth, deleteProducts)
  .delete('/services/:serviceid', checkAuth, deleteServices)

exports.publicationsRouter = publicationsRouter
