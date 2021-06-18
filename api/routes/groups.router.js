const groupsRouter = require('express').Router()
const { checkAuth, isModerator } = require('../../utils')

const {
  // Groups
  getAllGroups,
  createGroup,
  deleteGroups,

  // Group publications
  getAllGroupPublications,
  getGroupPublication,
  createGroupPublication,
  deleteGroupPublication,

  // Group users
  addUserGroup,
  deleteUserGroup
} = require('../controllers/groups.controller')

groupsRouter
  // Groups
  .get('/', checkAuth, getAllGroups)
  .post('/', checkAuth, createGroup)
  .delete('/:groupId', checkAuth, isModerator, deleteGroups)

  // Group Publications
  .get('/:groupId/publications', checkAuth, getAllGroupPublications)
  .get('/:groupId/publications/:publicationId', checkAuth, getGroupPublication)
  .post('/:groupId/publications', checkAuth, createGroupPublication)
  .delete('/:groupId/publications/:publicationId', checkAuth, isModerator, deleteGroupPublication)

  // Group users
  .put('/:groupId/users/:userId', checkAuth, addUserGroup)
  .delete('/:groupId/users/:userId', checkAuth, deleteUserGroup)

exports.groupsRouter = groupsRouter
