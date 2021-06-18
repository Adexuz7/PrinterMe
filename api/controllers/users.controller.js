const { UserModel } = require('../models/users.model')

exports.getAllUsers = (req, res) => {
  UserModel
    .find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err))
}

exports.getUser = (req, res) => {
  UserModel
    .findById(req.params.userid)
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err))
}

exports.createUser = (req, res) => {
  UserModel
    .create(req.body)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
}

exports.deleteUser = (req, res) => {
  UserModel
    .deleteOne({ _id: res.locals.user._id })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
}

exports.userTimeline = (req, res) => {
  UserModel
    .find({ _id: { $in: res.locals.user.follows } })
    .then(users => {
      // TO DO
      console.log(users)
    })
    .catch(err => {
      // TO DO
      console.log(err)
    })
}

exports.followUser = (req, res) => {
  const user = res.locals.user
  const request = req.params

  if (!user.follow.includes(request.userid)) {
    user.follow.push(request.userid)
  } else {
    user.follow.remove(request.userid)
  }

  user
    .save()
    .then(user => {
      UserModel
        .findById(request.userid)
        .then(followed => {
          if (!followed.follower.includes(user.id)) {
            followed.follower.push(user.id)
          } else {
            followed.follower.remove(user.id)
          }
          followed.save()
        })
      res.status(200).json(user)
    })
    .catch(err => res.status(500).json(err))
}

exports.getAllSellers = (req, res) => {
  UserModel
    .find({ role: 'seller' })
    .then(sellers => res.status(200).json(sellers))
    .catch(err => res.status(500).json(err))
}

exports.addUserPrinter = (req, res) => {
  const user = res.locals.user

  user.seller.printer.push(req.body.printerId) // Add printer ref to user

  user
    .save()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
}

exports.removeUserPrinter = (req, res) => {
  const user = res.locals.user

  user.seller.printer.remove(req.body.printerId) // Remove printer ref from user

  user
    .save()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
}
