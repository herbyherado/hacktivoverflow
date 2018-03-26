const User = require('../models/user.model')

module.exports = {
  create: function (req, res) {
    console.log(req.body)
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    .then(user => {
      res.status(200).json({
        message: 'New user created',
        user
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'Unable to create user',
        err
      })
    })
  },
  getAll: function (req, res) {
    User.find()
      .exec()
      .then(users => {
        res.status(200).json({
          message: 'All users retrieved',
          users
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'Unable to retrieve users data'
        })
      })
  }
}