const { UserModel } = require('../models/users.model')

exports.getUserData = (req, res) => {
  UserModel
    .findById(res.locals.user.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
}

exports.editUserData = (req, res) => {
  UserModel
    .findOneAndUpdate({ _id: res.locals.user.id }, req.body)
    .then(user => res.status(200).json('Profile updated'))
    .catch(err => res.status(500).json(err))
}
