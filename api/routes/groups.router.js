const groupsRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
  createGroup
} = require('../controllers/groups.controller')

//GroupsRouter.get('/', checkAuth, getAllUsersPublications)
groupsRouter.post('/', createGroup)

exports.groupsRouter = groupsRouter
