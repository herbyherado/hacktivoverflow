const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = mongoose.model('User', Schema({
  username: {
    type: String,
    required: true,
    unique: [true, 'Username has been taken. Please enter another username']
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    unique: [true, 'Please use other email address'],
    validate: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  }
}, {
  timestamps: true
})
)

userSchema.pre('save', function (next) {
  let user = this
  bycrypt.genSalt(saltRounds, function (err, salt){
    if (err) return next(err)
    bycrypt.hash(user.password, salt, function(err, hash){
        if (err) return next(err)
        user.password = hash
        next()
    }) 
  })
})
userSchema.pre('update', function (next) {
  let user = this
  if (user._update.$set.password){
      bycrypt.genSalt(saltRounds, function (err, salt){
          if (err) return next(err)
          bycrypt.hash(user._update.$set.password, salt, function(err, hash){
              if (err) return next(err)
              user._update.$set.password = hash
              next()
          })
      })
  } else {
      next()
  }
})

module.exports = mongoose.model('User', userSchema)