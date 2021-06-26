// model for our Users

//import mongoose from 'mongoose'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//import uniqueValidator from 'mongoose-unique-validator'
const uniqueValidator = require('mongoose-unique-validator')

let userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
  },
  {
    collection: 'users',
  }
);

userSchema.plugin(uniqueValidator, { message: 'Email already in use!' });
//export default mongoose.model('User', userSchema);
module.exports = User = mongoose.model('User', userSchema);
