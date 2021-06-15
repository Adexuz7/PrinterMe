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

exports.getUser = (req, res) => {
  UserModel
    .findById(req.params.userid)
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
      res.status(500).json(err)
    })
}

exports.userTimeline = (req, res) => {
  UserModel
    .find({ _id: { $in: res.locals.user.follows } })
    .then(users => {
      console.log(users)
    })
    .catch(err => {
      console.log(err)
    })
}

exports.followUser = (req, res) => {
  if (!res.locals.user.follow.includes(req.params.userid)) {
    res.locals.user.follow.push(req.params.userid)
  } else {
    res.locals.user.follow.remove(req.params.userid)
  }
  res.locals.user
    .save()
    .then(user => {
      UserModel
        .findById(req.params.userid)
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
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.getAllSellers = (req, res) => {
  UserModel
    .find({ role: 'seller'})

    .then(sellers => {
      console.log(sellers)
      res.json(sellers)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
