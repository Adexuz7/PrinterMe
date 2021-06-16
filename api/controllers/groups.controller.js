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
  console.log(req.body)
  GroupsModel
    .create({ moderator: res.locals.user.id, ...req.body })
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
      res.locals.user.publication.push(mongoose.Types.ObjectId(publication.id))
      res.locals.user.save()

      GroupsModel
        .findById(req.params.groupId)
        .then(group => {
          group.groupPublications.push(mongoose.Types.ObjectId(publication.id))
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

exports.deleteGroupPublication = (req, res) => {
  PublicationsModel
    .findByIdAndDelete(req.params.publicationId)
    .then(publication => {
      res.locals.user.publication.remove(publication.id)
      res.locals.user.save()

      GroupsModel
        .findById(req.params.groupId)
        .then(group => {
          group.groupPublications.remove(publication.id)
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
    .findByIdAndDelete(req.params.groupId)
    .then(group => {
      res.status(200).json(group)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
