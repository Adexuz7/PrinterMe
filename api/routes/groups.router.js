const GroupsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  createGroup,
  createGroupPublication,
  getAllGroups,
  deleteGroups,
  deleteGroupPublication,
  getAllGroupPublications
} = require('../controllers/groups.controller')

GroupsRouter.post('/', checkAuth, createGroup)
GroupsRouter.post('/:groupId/publications', checkAuth, createGroupPublication)
GroupsRouter.get('/', checkAuth, getAllGroups)
GroupsRouter.get('/:groupId/publications', checkAuth, getAllGroupPublications)
GroupsRouter.delete('/:groupId', checkAuth, deleteGroups)
GroupsRouter.delete('/:groupId/publications/:publicationId', checkAuth, deleteGroupPublication)

exports.GroupsRouter = GroupsRouter
