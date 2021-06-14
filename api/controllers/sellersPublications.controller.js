const { SellerPublicationsModel } = require('../models/sellerPublications.model')

exports.getAllSellersPublications = (req, res) => {
  SellerPublicationsModel
    .find()
    .then(publications => {
      res.json(publications)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.createSellerPublication = (req, res) => {
  SellerPublicationsModel
    .create(req.body)
    .then(publication => {
      res.status(200).json(publication)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
