const { GroupsModel } = require('../models/groups.model')
const { PublicationsModel } = require('../models/publications.model')

// exports.getAllUsersPublications = (req, res) => {
//   PublicationsModel
//     .find()
//     .then(publications => {
//       res.json(publications)
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ err: 'Error' })
//     })
// }

exports.createGroup = (req, res) => {
  console.log(req.body)
  GroupsModel
    .create(req.body)
    .then(group => {
      res.status(200).json(group)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.createGroupPublication = (req, res) => {
  req.body.userId = res.locals.user.id
  PublicationsModel
    .create(req.body)
    .then(publication => {
      res.locals.user.publication.push(publication.id)
      res.locals.user.save()

      GroupsModel
        .findById(req.params.groupId)
        .then(group => {
          group.groupPublications.push(publication.id)
          group.save()
          res.status(200).json(publication)
        })
        .catch(err => {
          console.log(err)
          res.status(500).json({ err: 'Error' })
        })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.getAllGroups = (req, res) => {
  GroupsModel
    .find()
    .then(group => {
      res.json(group)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.deleteGroups = (req, res) => {
  GroupsModel
    .deleteOne({ _id: req.body._id })
    .then(group => {
      res.status(200).json(group)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
