const Message = require('../models/Message')
const config = require('../config')

module.exports = {
  addMessage: (req, res) => {
    let newMessage = new Message(req.body)
    newMessage.save((err, message) => {
      if(err)
        res.send(err)
      else
        res.status(201).json(message)
    })
  },

  getMessage: (req, res) => {
    Message.findById(req.params.messageId, (err, message) => {
      if(err)
        res.send(err)
      else
        res.json(message)
    })
  },

  getMessages: (req, res) => {
    let per_page = config.messages.messages_per_page
    let page = req.params.page || 0
    Message.find({})
           .skip(per_page*page)
           .limit(per_page)
           .exec((err, messages) => {
             if(err)
               res.send(err)
             else
               res.json(messages)
           })
  }
}
