const { UserPublicationsModel } = require('../models/userPublications.model')
const { UserModel } = require('../models/users.model')

exports.getAllUsersPublications = (req, res) => {
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

      UserModel
        .findById(req.body.userId)
        .then(user => {
          user.publications.push(publication.id) // Add publication ref to user publications
          user.save() // Save changes to db
        })
        .catch(err => {
          console.log('Error referencing publication to user', err)
        })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
