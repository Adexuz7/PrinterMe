const groupsRouter = require('express').Router()
const { checkAuth, isModerator } = require('../../utils')

const {
  createGroup,
  createGroupPublication,
  getAllGroups,
  deleteGroups,
  deleteGroupPublication,
  getAllGroupPublications,
  addUserGroup,
  deleteUserGroup,
  getGroupPublication
} = require('../controllers/groups.controller')

groupsRouter
  .post('/', checkAuth, createGroup)
  .post('/:groupId/publications', checkAuth, createGroupPublication)
  .put('/:groupId/users/:userId', checkAuth, addUserGroup)
  .get('/', checkAuth, getAllGroups)
  .get('/:groupId/publications', checkAuth, getAllGroupPublications)
  .get('/:groupId/publications/:publicationId', checkAuth, getGroupPublication)
  .delete('/:groupId', checkAuth, isModerator, deleteGroups)
  .delete('/:groupId/users/:userId', checkAuth, deleteUserGroup)
  .delete('/:groupId/publications/:publicationId', checkAuth, isModerator, deleteGroupPublication)

exports.groupsRouter = groupsRouter
