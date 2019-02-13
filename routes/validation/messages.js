const Joi = require('joi')

module.exports = {
  // POST /api/message/create
  createMessage: {
    body: {
      email: Joi.string().regex(/.+\@.+\..+/),
      text: Joi.string().regex(/^\s*(?:\S\s*){1,100}$/)
    }
  }
};
