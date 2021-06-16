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
  const request = req.body

  request.userId = user._id // Add userId
  request.date = new Date() // Add date

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

exports.getAllComments = (req, res) => {
  PublicationsModel
    .findById(req.params.publication)
    .then(publication => {
      res.status(200).json(publication.comment)
    })
    .catch(err => res.status(500).json(err))
}

exports.addComment = (req, res) => {
  const user = res.locals.user
  const request = req.body

  request.userId = user._id // Add userId
  request.date = new Date() // Add date

  PublicationsModel
    .findById(req.params.publication)
    .then(publication => {
      publication.comment.push(req.body)
      publication.save()
        .then(publication => {
          user.comment.push(publication.id)
          user.save()
            .then(user => res.status(200).json('Comment OK'))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    })
    .catch(err => res.status(500).json(err))
}
