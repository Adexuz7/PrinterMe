const printersRouter = require('express').Router()

const {
  checkAuth,
  isAdmin
} = require('../../utils')

const {
  getAllPrinters,
  createPrinters
} = require('../controllers/printers.controller')

printersRouter.get('/', checkAuth, getAllPrinters)
printersRouter.post('/', checkAuth, isAdmin, createPrinters)

exports.printersRouter = printersRouter
