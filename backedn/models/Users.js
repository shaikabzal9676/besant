// models/User.js - Mongoose Model for User

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: {type:String , unique:true},
  phone: String,
  profession: String
});

const User = mongoose.model('User', userSchema);

module.exports=User