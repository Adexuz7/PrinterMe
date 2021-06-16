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

printersRouter.get('/', checkAuth, getAllPrinters)
printersRouter.post('/', checkAuth, isAdmin, createPrinters)
printersRouter.delete('/delete', checkAuth, deletePrinters)

exports.printersRouter = printersRouter
