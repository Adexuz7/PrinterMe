const { SellerPublicationsModel } = require('../models/sellerPublications.model')
const { SellerModel } = require('../models/sellers.model')

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

      SellerModel
        .findById(req.body.sellerId)
        .then(seller => {
          seller.sellerPublications.push(publication.id) // Add publication ref to seller publications
          seller.save() // Save changes to db
        })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
