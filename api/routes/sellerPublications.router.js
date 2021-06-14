const sellerPublicationsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  getAllSellersPublications,
  createSellerPublication
} = require('../controllers/sellersPublications.controller')

sellerPublicationsRouter.get('/', checkAuth, getAllSellersPublications)
sellerPublicationsRouter.post('/', createSellerPublication)

exports.sellerPublicationsRouter = sellerPublicationsRouter
