let config = {}

config.messages = {}
config.server = {}

config.messages.messages_per_page = 10
config.server.database_url = "mongodb://localhost:27017/chat"
config.server.port = 5000

module.exports = config;
