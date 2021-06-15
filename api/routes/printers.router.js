const printersRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllPrinters,
  createPrinters,
  deletePrinters
} = require('../controllers/printers.controller')

printersRouter.get('/', checkAuth, getAllPrinters)
printersRouter.post('/', checkAuth, createPrinters)
printersRouter.delete('/', checkAuth, deletePrinters)

exports.printersRouter = printersRouter
