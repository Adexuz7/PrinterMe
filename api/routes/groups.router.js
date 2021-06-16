const GroupsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  createGroup
} = require('../controllers/groups.controller')

//GroupsRouter.get('/', checkAuth, getAllUsersPublications)
GroupsRouter.post('/', createGroup)

exports.GroupsRouter = GroupsRouter
