const salesRouter = require('express').Router()
const {
  checkAuth,
  isSeller
} = require('../../utils')

const {
  createSaleTicket,
  modifySale,
  deleteSale
} = require('../controllers/sales.controller')

salesRouter
  .post('/:userid', checkAuth, createSaleTicket)
  .put('/:saleid', checkAuth, isSeller, modifySale)
  .delete('/:saleid', checkAuth, isSeller, deleteSale)

exports.salesRouter = salesRouter
