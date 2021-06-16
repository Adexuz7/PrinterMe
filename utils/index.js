const jwt = require('jsonwebtoken')
const { GroupsModel } = require('../api/models/groups.model')
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

exports.isModerator = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) { res.status(403).json({ error: 'Token not valid' }) }
    GroupsModel
      .findOne({ email: token.email })
      .then(group => {
        if (group.moderator === res.locals.user._id) {
          next()
        } else {
          res.json({ err: 'You don\'t have permits' })
        }
      })
  })
}
