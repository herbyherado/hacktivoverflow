const express = require('express')
const users = express.Router()
const userController = require('../controllers/user.controller')

users.get('/', userController.getAll)
users.post('/', userController.create)

module.exports = users