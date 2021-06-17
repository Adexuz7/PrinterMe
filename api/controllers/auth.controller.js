const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { UserModel } = require('../models/users.model')

exports.signup = (req, res) => {
  const hashedPwd = bcrypt.hashSync(req.body.password, 10)
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
            password: hashedPwd,
            email: req.body.email,
            phone: req.body.phone,
            role: req.body.role
          })
          .then(user => {
            const userData = { email: user.email, role: user.role }

            const token = jwt.sign(
              userData,
              process.env.SECRET, // TODO SECRET MORE SECRET PLEASE
              { expiresIn: '7d' }
            )
            return res.json({ token: token, ...userData })
          })
          .catch(err => {
            console.log(err)
            res.status(500).json(err.message)
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
      if (!user) res.status(404).send('User not found')
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (!result) {
            return res.json({ error: 'Wrong email or password' }, err)
          }
          const userData = {
            name: user.name,
            email: user.email,
            role: user.role
          }

          const token = jwt.sign(
            userData,
            process.env.SECRET,
            { expiresIn: '1h' }
          )
          return res.json({ token: token, ...userData })
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.json({ err: 'Error' })
    })
}

exports.whoami = (req, res) => {
  res.json({
    name: res.locals.user.name,
    email: res.locals.user.email,
    role: res.locals.user.role
  })
}
