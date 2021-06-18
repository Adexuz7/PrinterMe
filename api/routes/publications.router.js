const publicationsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllPublications,
  getOnePublication,
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
  // Publications
  .get('/', getAllPublications)
  .post('/', checkAuth, createPublication)

  // Specific publication
  .get('/:publication/', getOnePublication)
  .put('/:publication/', checkAuth, updatePublication)
  .delete('/:publication', checkAuth, deletePublication)

  // Comments
  .get('/:publication/comments', getAllComments)
  .post('/:publication/comments', checkAuth, addComment)
  .delete('/:publication/coments/:comment', checkAuth, deleteComment)

  // Products and services
  .post('/products', checkAuth, createProducts)
  .post('/services', checkAuth, createServices)
  .put('/products/:productid', checkAuth, modifyProducts)
  .put('/services/:serviceid', checkAuth, modifyServices)
  .delete('/products/:productid', checkAuth, deleteProducts)
  .delete('/services/:serviceid', checkAuth, deleteServices)

exports.publicationsRouter = publicationsRouter
