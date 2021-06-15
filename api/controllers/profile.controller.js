const { UserModel } = require('../models/users.model')

exports.getUserData = (req, res) => {
  const user = res.locals.user

  UserModel
    .findById(user.id)
    .then(user => {
      res.json(user)
    })
    .catch(err => res.status(500).json(err))
}
