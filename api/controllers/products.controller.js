const { DesignProductModel } = require('../models/designProducts.model')
const { PrintServiceModel } = require('../models/printServices.model')

exports.createProducts = (req, res) => {
  DesignProductModel
    .create(req.body)
    .then(product => res.status(200).json(product))
    .catch(err => res.status(500).json(err))
}

exports.modifyProducts = (req, res) => {
  DesignProductModel
    .findOneAndUpdate({ _id: req.params.productid }, req.body)
    .then(product => res.status(200).json('Product updated'))
    .catch(err => res.status(500).json(err))
}

exports.deleteProducts = (req, res) => {
  DesignProductModel
    .deleteOne({ _id: req.params.productid })
    .then(product => res.status(200).json(product))
    .catch(err => res.status(500).json(err))
}

exports.createServices = (req, res) => {
  PrintServiceModel
    .create(req.body)
    .then(service => res.status(200).json(service))
    .catch(err => res.status(500).json(err))
}

exports.modifyServices = (req, res) => {
  PrintServiceModel
    .findOneAndUpdate({ _id: req.params.serviceid }, req.body)
    .then(service => res.status(200).json('Product updated'))
    .catch(err => res.status(500).json(err))
}

exports.deleteServices = (req, res) => {
  PrintServiceModel
    .deleteOne({ _id: req.params.serviceid })
    .then(service => res.status(200).json(service))
    .catch(err => res.status(500).json(err))
}
