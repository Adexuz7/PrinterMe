const mongoose = require('mongoose')

const printersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Printer name is required']
  },
  brand: {
    type: String,
    required: [true, 'Brand is required']
  },
  model: {
    type: String,
    required: [true, 'Model is required']
  },
  impMax: {
    type: String,
    required: [true, 'Introduce the maximum printing space']
  },
  material: [{
    type: String,
    required: [true, 'Introduce the material you are going to use']
  }]
})

exports.PrintersModel = mongoose.model('printers', printersSchema)
