const mongoose = require("./connection.js");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  comments: [CommentSchema]
});

mongoose.model("User", userSchema);

module.exports = mongoose;
