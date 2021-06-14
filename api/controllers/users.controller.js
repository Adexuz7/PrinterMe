const { UserModel } = require('../models/users.model')

exports.getAllUsers = (req, res) => {
  UserModel
    .find()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.createUser = (req, res) => {
  UserModel
    .create(req.body)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
