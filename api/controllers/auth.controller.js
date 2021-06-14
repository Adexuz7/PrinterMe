const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { UserModel } = require('../models/users.model')

exports.signup = (req, res) => {
  const hashed_pwd = bcrypt.hashSync(req.body.password, 10)
  UserModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        res.status(409).json({ err: 'Email already exists. Try another one' })
      } else {
        UserModel
          .create({
            name: req.body.name,
            username: req.body.username,
            password: hashed_pwd,
            email: req.body.email,
            phone: req.body.phone
          })
          .then(user => {
            const user_data = { email: user.email, role: user.role }

            const token = jwt.sign(
              user_data,
              process.env.SECRET, // TODO SECRET MORE SECRET PLEASE
              { expiresIn: '1h' }
            )
            return res.json({ token: token, ...user_data })
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({ msg: 'Error' })
          })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.login = (req, res) => {
  UserModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (!result) {
            return res.json({ error: `Wrong email or password` })
          }

          const user_data = { name: user.name, email: user.email }

          const token = jwt.sign(
            user_data,
            process.env.SECRET, // TODO SECRET MORE SECRET PLEASE
            { expiresIn: '1h' }
          )
          return res.json({ token: token, ...user_data })
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.json({ err: 'Error' })
    })
}

exports.whoami = (req, res) => {
  res.json({ name: res.locals.user.name, email: res.locals.user.email })
}
