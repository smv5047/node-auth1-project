const express = require("express")
const Users = require("./users-model")
const router = express.Router()

router.get()



// | POST   | /api/login    | 
//Use the credentials sent inside the `body` to authenticate the user. 
//On successful login, create a new session for the user and send back a 'Logged in' message and a cookie that contains the user id. If login fails, respond with the correct status code and the message: 'You shall not pass!' |


module.exports = router