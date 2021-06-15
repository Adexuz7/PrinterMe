const { PublicationsModel } = require('../models/publications.model')

exports.getAllPublications = (req, res) => {
  PublicationsModel
    .find()
    .then(publications => {
      res.json(publications)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.createPublication = (req, res) => {
  const user = res.locals.user
  req.body.userId = user._id // Add userid to request body

  PublicationsModel
    .create(req.body)
    .then(newPublication => {
      res.status(200).json(newPublication)
      user.publication.push(newPublication.id) // Add publication ref to user publications
      user.save() // Save changes to db
        .then(user => console.log('Publication OK'))
        .catch(err => console.log(err))
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
