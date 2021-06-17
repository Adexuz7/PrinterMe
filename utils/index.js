const jwt = require('jsonwebtoken')
const { UserModel } = require('../api/models/users.model')

exports.checkAuth = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) { res.status(403).json({ error: 'Token not valid' }) }
    UserModel
      .findOne({ email: token.email })
      .then(user => {
        if (user) {
          res.locals.user = user
          next()
        } else {
          res.json({ err: 'Token not valid' })
        }
      })
  })
}

exports.isAdmin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) { res.status(403).json({ error: 'Token not valid' }) }
    UserModel
      .findOne({ email: token.email })
      .then(user => {
        if (user.permit === 'admin') {
          res.locals.user = user
          next()
        } else {
          res.json({ err: 'You don\'t have permits' })
        }
      })
  })
}

exports.isSeller = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) { res.status(403).json({ error: 'Token not valid' }) }
    UserModel
      .findOne({ email: token.email })
      .then(user => {
        if (user.role === 'seller') {
          res.locals.user = user
          next()
        } else {
          res.json({ err: 'You don\'t have permits' })
        }
      })
  })
}
