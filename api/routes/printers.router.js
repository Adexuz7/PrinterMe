const printersRouter = require('express').Router()

const {
  checkAuth,
  isAdmin
} = require('../../utils')

const {
  getAllPrinters,
  createPrinters,
  deletePrinters
} = require('../controllers/printers.controller')

printersRouter
  .get('/', checkAuth, getAllPrinters)
  .post('/', checkAuth, isAdmin, createPrinters)
  .delete('/delete', checkAuth, deletePrinters)

exports.printersRouter = printersRouter
