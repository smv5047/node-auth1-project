const express = require("express")
const Users = require("./login-model")
const router = express.Router()
const bcrypt = require("bcryptjs")


router.post("/", async (req, res, next) => {
    try {
        const { username, password } = req.body
        const [user] = await Users.findBy({ username })
        const validatePassword = await bcrypt.compare(password, user.password)
    
        if (user && validatePassword) {
          req.session.user = user
          res.status(200).json({ message: `Welcome, ${user.username}. You've logged in successfully.` })
        } else {
          res.status(401).json({ massage: "You shall not pass!" })
        }
      } catch (err) {
        next(err)
      }
})



// | POST   | /api/login    | 
//Use the credentials sent inside the `body` to authenticate the user. 
//On successful login, create a new session for the user and send back a 'Logged in' message and a cookie that contains the user id. If login fails, respond with the correct status code and the message: 'You shall not pass!' |


module.exports = router