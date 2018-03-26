const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.model('Question', Schema({
  question: {
    type: String,
    required: true
  },
  vote: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})
)