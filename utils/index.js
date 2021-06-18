const jwt = require('jsonwebtoken')
const { UserModel } = require('../api/models/users.model')
const { GroupsModel } = require('../api/models/groups.model')

exports.checkAuth = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) res.status(403).json('Token not valid')

    UserModel
      .findOne({ email: token.email })
      .then(user => {
        if (user) {
          res.locals.user = user
          next()
        } else {
          res.json('Token not valid')
        }
      })
  })
}

exports.isAdmin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) res.status(403).json('Token not valid')

    UserModel
      .findOne({ email: token.email })
      .then(user => {
        if (user.permit === 'admin') {
          res.locals.user = user
          next()
        } else {
          res.json('You don\'t have permits')
        }
      })
  })
}

exports.isModerator = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) res.status(403).json('Token not valid')

    GroupsModel
      .findOne({ $and: [{ moderator: res.locals.user._id }, { _id: req.params.groupId }] })
      .then(group => {
        if (group.moderator.equals(res.locals.user.id)) {
          next()
        } else {
          res.json('You don\'t have permits')
        }
      })
      .catch(err => res.status(500).json(err))
  })
}

exports.isSeller = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) res.status(403).json('Token not valid')

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
