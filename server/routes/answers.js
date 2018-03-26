const express = require('express')
const answers = express.Router()

answers.get('/', (req, res) => {
  res.send('connected')
})

module.exports = answers