const jwt = require('jsonwebtoken')
const { GroupsModel } = require('../api/models/groups.model')
const { UserModel } = require('../api/models/users.model')
const mongoose = require('mongoose')

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
    if (err) { return res.status(403).json({ error: 'Token not valid' }) }
    GroupsModel
      .findOne({ $and: [{ moderator: res.locals.user._id }, { _id: req.params.groupId }] })
      .then(group => {
        if (group.moderator.equals(res.locals.user.id)) {
          next()
        } else {
          res.json({ err: 'You don\'t have permits' })
        }
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ msg: 'Error' })
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
