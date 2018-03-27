const Answer = require('../models/answer.model')
const Question = require('../models/question.model')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

module.exports = {
  create: function (req, res) {
    console.log('masuk')
    let token = req.headers
    console.log(token)
    let decoded = jwt.decode(token.token, 'secret')
    console.log(decoded)
    // console.log(req.params.id)
    Answer.create({
      answer: req.body.answer,
      // question: mongoose.Types.ObjectId(req.params.id),
      user: mongoose.Types.ObjectId(decoded.id)
    })
    .then(ans => {
      Question.find({ _id: req.params.id })
        .then(ques => {
          console.log(ques)
          ques[0].answer.push(ans._id)
          ques[0].save()
          res.status(200).json({
            message: 'Answer posted',
            ans,
            ques
          })
        })
    })
    .catch(err => {
      res.status(400).json({
        message: 'Unable to post answer',
        err
      })
    })
  },
  getAll: function (req, res) {
    Answer.find()
      .exec()
      .then(ans => {
        res.status(200).json({
          message: 'All answers retrieved',
          ans
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'Unable to retrieve answers',
          err
        })
      })
  },
  remove: function (req, res) {
    Answer.findByIdAndRemove(req.params.id)
      .exec()
      .then(ans => {
        res.status(200).json({
          message: 'answer deleted',
          ans
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'unable to delete answer'
        })
      })
  },
  upvote: function (req, res) {
    // find in downvote
    Answer.findOne({ _id: req.body.ansId, downvote: mongoose.Types.ObjectId(req.body.userId)})
      .exec()
      .then(val => {
        // if has value then remove
        val.remove()
        // then find in upvote
        Answer.findOne({ _id: req.body.ansId, upvote: mongoose.Types.ObjectId(req.body.userId)})
          .exec()
          // if has value then do nothing
          .then(upv => {

          })
          .catch(error => {
            // if does not have value, then add
            console.log(error)
          })
      })
      .catch(err => {
        // else check in upvote
        Answer.findOne({ _id: req.body.ansId, upvote: mongoose.Types.ObjectId(req.body.userId)})
        console.log(err)
      })
  },
  downvote: function (req, res) {

  }
}