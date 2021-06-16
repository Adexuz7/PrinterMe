const { GroupsModel } = require('../models/groups.model')
// const { PublicationsModel } = require('../models/publications.model')

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
