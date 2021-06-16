const GroupsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  createGroup,
  createGroupPublication,
  getAllGroups,
  deleteGroups
} = require('../controllers/groups.controller')

GroupsRouter.post('/', checkAuth, createGroup)
GroupsRouter.post('/:groupId/publication', checkAuth, createGroupPublication)
GroupsRouter.get('/', checkAuth, getAllGroups)
GroupsRouter.delete('/', checkAuth, deleteGroups)

exports.GroupsRouter = GroupsRouter
