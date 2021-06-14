const { UserPublicationsModel } = require('../models/userPublications.model')

exports.getAllUsersPublications = (req, res) => {
  console.log(req)
  UserPublicationsModel
    .find()
    .then(publications => {
      res.json(publications)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.createUserPublication = (req, res) => {
  console.log(req.body)
  UserPublicationsModel
    .create(req.body)
    .then(publication => {
      res.status(200).json(publication)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
