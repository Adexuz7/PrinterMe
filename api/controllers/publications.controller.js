const { PublicationsModel } = require('../models/publications.model')

// Publications

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
  request.type = user.role // Add publication type based on user role
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

exports.updatePublication = (req, res) => {
  PublicationsModel
    .findOneAndUpdate({ _id: req.params.publication }, req.body)
    .then(user => res.status(200).json('Publication updated'))
    .catch(err => res.status(500).json(err))
}

exports.deletePublication = (req, res) => {
  const user = res.locals.user
  const request = req.params

  PublicationsModel
    .findById(request.publication)
    .then(publication => {
      if (publication.userId.toString() === user.id || user.permit === 'admin') {
        PublicationsModel
          .findByIdAndDelete(publication.id)
          .then(publication => res.status(200).json(publication))
          .catch(err => res.status(500).json(err))
      }
    })
    .catch(err => res.status(500).json(err))
}

// Comments

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

exports.deleteComment = (req, res) => {
  const user = res.locals.user
  const request = req.params

  PublicationsModel
    .findById(request.publication)
    .then(publication => {
      const comments = publication.comment
      const commentIndex = findWithAttr(comments, 'id', request.comment)
      const commentToDelete = comments[commentIndex]

      if (commentToDelete !== undefined) {
        if (commentToDelete.userId.toString() === user.id || user.permit === 'admin') {
          comments.splice(commentIndex, 1)
        }
      }

      publication
        .save()
        .then(publication => res.status(200).json(publication))
        .catch(err => res.status(500).json(err))
    })
    .catch(err => res.status(500).json(err))
}

function findWithAttr (array, attr, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][attr] === value) return i
  }
  return -1
}
