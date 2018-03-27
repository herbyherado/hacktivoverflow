const express = require('express')
const questions = express.Router()
const questionController = require('../controllers/question.controller')
const { authenticate } = require('../middleware/auth')

questions.get('/', questionController.getAll)
questions.post('/', authenticate, questionController.create)
questions.get('/:id', questionController.getById)
questions.post('/myquestions', questionController.getQuestionByUserId)
questions.delete('/:id', questionController.deleteQuestion)
questions.put('/:id', questionController.updateQuestion)

module.exports = questions