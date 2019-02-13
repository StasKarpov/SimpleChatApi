const messagesController = require('./../controllers/message.ctrl')
const validations = require('./validation/messages')
const validate = require('express-validation')

module.exports = (router) => {
  router.get('/messages/single/:messageId', messagesController.getMessage),
  router.get('/messages/list/:page', messagesController.getMessages),
  router.post('/messages/create',
              validate(validations.createMessage),
              messagesController.addMessage)
}
