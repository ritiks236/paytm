const mongoose = require("mongoose");

//Schema for user

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  firstName: {
    type: String,
    require: true,
    trim: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
    maxlength: 50,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
