const Question = require('../models/question.model')
const jwt = require('jsonwebtoken')

module.exports = {
  getAll: function (req, res) {
    Question.find()
      .populate('answer')
      .sort('-createdAt')
      .exec()
      .then(response => {
        res.status(200).json({
          message: 'Question list retrieved successfully',
          response
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'Unable to retrieve question list',
          err
        })
      })
  },
  create: function (req, res) {
    let decoded = jwt.verify(req.headers.token, 'secret')
    
    Question.create({
      title: req.body.title,
      description: req.body.description,
      user: decoded.id
    })
    .then(response => {
      res.status(200).json({
        message: 'Question posted',
        response
      })
    })
    .catch(error => {
      res.status(400).json({
        message: 'Unable to post question'
      })
    })
  },
  getById: function (req, res) {
    console.log(req.params.id)
    Question.findOne({ _id: req.params.id })
      .populate('answer')
      .exec()
      .then(question => {
        console.log(question)
        res.status(200).json({
          message: 'Question retrieved',
          question
        })
      })
      .catch(error => {
        console.log(error)
        res.status(400).json({
          message: 'Unable to retrieve question thread',
          error
        })
      })
  },
  getQuestionByUserId: function (req, res) {
    let decoded = jwt.verify(req.headers.token, 'secret')
    Question.find({ user: decoded.id })
      .exec()
      .then(ques => {
        console.log(ques)
        res.status(200).json({
          message: 'User questions retrieved',
          ques
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'Unable to retrieve user questions',
          err
        })
      })
    // res.send(decoded)
  },
  deleteQuestion: function (req, res) {
    Question.findByIdAndRemove(req.params.id)
      .exec()
      .then(question => {
        res.status(200).json({
          message: 'question deleted',
          question
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'unable to delete question',
          err
        })
      })
  },
  updateQuestion: function (req, res) {
    Question.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description
    })
      .exec()
      .then(question => {
        res.status(200).json({
          message: 'question updated',
          question
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'unable to update question',
          err
        })
      })
  }
}