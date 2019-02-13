const mongoose = require('mongoose')

let MessageSchema = new mongoose.Schema({
    author: String,//username
    email: String,
    text: String,
    createDate: {
      type: Date,
      default: Date.now
    },
    updateDate: {
      type: Date,
      default: Date.now
    }
  }
)

module.exports = mongoose.model('Message', MessageSchema)
