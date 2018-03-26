const express = require('express')
const questions = express.Router()

questions.get('/', (req, res) => {
  res.send('connected')
})

module.exports = questions