const { PrintersModel } = require('../models/printers.model')

exports.getAllPrinters = (req, res) => {
  PrintersModel
    .find()
    .then(printer => res.json(printer))
    .catch(err => res.status(500).json(err))
}

exports.createPrinters = (req, res) => {
  PrintersModel
    .create(req.body)
    .then(printer => res.status(200).json(printer))
    .catch(err => res.status(500).json(err))
}

exports.deletePrinters = (req, res) => {
  PrintersModel
    .deleteOne({ _id: req.body._id })
    .then(printer => res.status(200).json(printer))
    .catch(err => res.status(500).json(err))
}
