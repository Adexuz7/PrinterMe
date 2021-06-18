const mongoose = require('mongoose')
const { GroupsModel } = require('../models/groups.model')
const { PublicationsModel } = require('../models/publications.model')

exports.getAllGroupPublications = (req, res) => {
  GroupsModel
    .findById(req.params.groupId)
    .populate('groupPublications')
    .then(group => res.status(200).json(group.groupPublications))
    .catch(err => res.status(500).json(err))
}

exports.createGroup = (req, res) => {
  GroupsModel
    .create({ moderator: res.locals.user.id, ...req.body })
    .then(group => res.status(200).json(group))
    .catch(err => res.status(500).json(err))
}

exports.createGroupPublication = (req, res) => {
  const user = res.locals.user
  req.body.userId = user.id

  PublicationsModel
    .create(req.body)
    .then(publication => {
      user.publication.push(mongoose.Types.ObjectId(publication.id))
      user.save()

      GroupsModel
        .findById(req.params.groupId)
        .then(group => {
          group.groupPublications.push(mongoose.Types.ObjectId(publication.id))
          group.save()
          res.status(200).json(publication)
        })
        .catch(err => res.status(500).json(err))
    })
    .catch(err => res.status(500).json(err))
}

exports.deleteGroupPublication = (req, res) => {
  const user = res.locals.user

  PublicationsModel
    .findByIdAndDelete(req.params.publicationId)
    .then(publication => {
      user.publication.remove(publication.id)
      user.save()

      GroupsModel
        .findById(req.params.groupId)
        .then(group => {
          group.groupPublications.remove(publication.id)
          group.save()
          res.status(200).json(publication)
        })
        .catch(err => res.status(500).json(err))
    })
    .catch(err => res.status(500).json(err))
}

exports.getGroupPublication = (req, res) => {
  GroupsModel
    .findById(req.params.groupId)
    .populate('groupPublications')
    .then(group => {
      const pub = group.groupPublications.filter(publication => publication.equals(req.params.publicationId))
      res.status(200).json(pub)
    })
    .catch(err => res.status(500).json(err))
}

exports.getAllGroups = (req, res) => {
  GroupsModel
    .find()
    .then(group => res.status(200).json(group))
    .catch(err => res.status(500).json(err))
}

exports.deleteGroups = (req, res) => {
  GroupsModel
    .findByIdAndDelete(req.params.groupId)
    .then(group => res.status(200).json('Group deleted'))
    .catch(err => res.status(500).json(err))
}

exports.addUserGroup = (req, res) => {
  GroupsModel
    .findById(req.params.groupId)
    .then(group => {
      if (!group.groupUsers.includes(req.params.userId)) {
        group.groupUsers.push(req.params.userId)
        group.save()
          .then(group => res.status(200).json('User added to group'))
          .catch(err => res.status(500).json(err))
      } else {
        res.status(200).send('User already belongs to the group')
      }
    })
    .catch(err => res.status(500).json(err))
}

exports.deleteUserGroup = (req, res) => {
  GroupsModel
    .findById(req.params.groupId)
    .then(group => {
      if (group.groupUsers.includes(req.params.userId)) {
        group.groupUsers.remove(req.params.userId)
        group.save()
          .then(group => res.status(200).json('User deleted'))
          .catch(err => res.status(500).json(err))
      } else {
        res.status(200).send('User is not included in the group')
      }
    })
    .catch(err => res.status(500).json(err))
}
