const mongoose = require('mongoose')
const Schema = mongoose.Schema

// define the model schema
const CommentSchema = new mongoose.Schema({
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  author: String,
  content: String,
  created: {
    type: Date,
    default: Date.now,
    required: true,
  }
})

module.exports = mongoose.model('Comment', CommentSchema)
