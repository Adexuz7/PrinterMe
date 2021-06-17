const GroupsRouter = require('express').Router()
const { checkAuth, isModerator } = require('../../utils')

const {
  createGroup,
  createGroupPublication,
  getAllGroups,
  deleteGroups,
  deleteGroupPublication,
  getAllGroupPublications,
  addUserGroup,
  deleteUserGroup
} = require('../controllers/groups.controller')

GroupsRouter.post('/', checkAuth, createGroup)
GroupsRouter.post('/:groupId/publications', checkAuth, createGroupPublication)
GroupsRouter.put('/:groupId/user/:userId', checkAuth, addUserGroup)
GroupsRouter.get('/', checkAuth, getAllGroups)
GroupsRouter.get('/:groupId/publications', checkAuth, getAllGroupPublications)
GroupsRouter.delete('/:groupId', checkAuth, isModerator, deleteGroups)
GroupsRouter.delete('/:groupId/user/:userId', checkAuth, deleteUserGroup)
GroupsRouter.delete('/:groupId/publications/:publicationId', checkAuth, isModerator, deleteGroupPublication)

exports.GroupsRouter = GroupsRouter
