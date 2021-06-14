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
      res.status(500).json({ err: 'Error' })
    })
}

exports.userTimeline = (req, res) => {
  console.log(res.locals.user.follows)
  UserModel
    .find({ _id: { $in: res.locals.user.follows } })
    //.populate('publications')
    .then(users => {
      console.log(users)
    })
    .catch(err => {
      console.log(err)
    })
}

exports.followUser = (req, res) => {
  if (!res.locals.user.follows.includes(req.params.userid)) {
    res.locals.user.follows.push(req.params.userid)
  } else {
    res.locals.user.follows.remove(req.params.userid)
  }
  res.locals.user
    .save()
    .then(user => {
      UserModel
        .findById(req.params.userid)
        .then(followed => {
          if (!followed.followers.includes(user.id)) {
            followed.followers.push(user.id)
          } else {
            followed.followers.remove(user.id)
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
