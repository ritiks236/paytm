const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

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

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  balance: {
    type: Number,
    require: true,
    minlength: 4,
  },
});

const Account = mongoose.model("Account", accountSchema);

module.exports = {
  User,
  Account,
};
