const express = require("express")
const routes = require('./routes/messages')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()
const router = express.Router()
const mongo_url = process.env.MONGODB_URI ||config.server.database_url

//connect to the database
try {
  mongoose.connect(mongo_url,{useNewUrlParser: true})
} catch (err) {
  console.log("Problems with connecting to mongoDB.")
  process.exit(1);
}


let port = process.env.PORT || config.server.port

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
//app.use(helmet())

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
