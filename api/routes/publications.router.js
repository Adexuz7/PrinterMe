const PublicationsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllPublications,
  createPublication,
  getAllComments,
  addComment
} = require('../controllers/publications.controller')

const {
  createProducts,
  createServices,
  modifyProducts,
  modifyServices,
  deleteProducts,
  deleteServices
} = require('../controllers/products.controller')

PublicationsRouter
  .get('/', checkAuth, getAllPublications)
  .post('/', checkAuth, createPublication)
  .post('/products', checkAuth, createProducts)
  .post('/services', checkAuth, createServices)
  .put('/products/:productid', checkAuth, modifyProducts)
  .put('/services/:serviceid', checkAuth, modifyServices)
  .delete('/products/:productid', checkAuth, deleteProducts)
  .delete('/services/:serviceid', checkAuth, deleteServices)
  .get('/:publication/comment', checkAuth, getAllComments)
  .post('/:publication/comment', checkAuth, addComment)

exports.PublicationsRouter = PublicationsRouter
