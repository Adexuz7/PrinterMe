const { SaleModel } = require('../models/sales.model')
const { UserModel } = require('../models/users.model')

exports.createSaleTicket = async function createSaleTicket (req, res) {
  try {
    req.body.date = new Date()
    const sale = await SaleModel.create({ buyerId: res.locals.user._id, ...req.body })

    res.locals.user.buyList.push(sale)
    await res.locals.user.save()

    const seller = await UserModel.findById(req.params.userid)
    seller.seller.salesHistory.push(sale)
    await seller.save()

    res.status(200).json(sale)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.modifySale = (req, res) => {
  SaleModel
    .findOneAndUpdate({ _id: req.params.saleid }, req.body)
    .then(sale => {
      res.status(200).json(sale, 'Your sale was modified')
    })
    .catch(err => res.status(500).json(err))
}

exports.deleteSale = (req, res) => {
  SaleModel
    .deleteOne({ _id: req.params.saleid })
    .then(sale => {
      res.status(200).json(sale, 'Your sale was canceled')
    })
    .catch(err => res.status(500).json(err))
}
