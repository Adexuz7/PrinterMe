const printersRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllPrinters,
  createPrinters
} = require('../controllers/printers.controller')

printersRouter.get('/', checkAuth, getAllPrinters)
printersRouter.post('/', checkAuth, createPrinters)

exports.printersRouter = printersRouter
