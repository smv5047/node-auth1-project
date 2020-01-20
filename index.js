const express = require("express")
const server = express()
const UserRouter = require("./users/users-router")
const RegisterRouter = require("./register/register-router")
const LoginRouter = require("./login/login-router")

server.use(express.json())
server.use('/api/users', UserRouter)
server.use('/api/register', RegisterRouter)
server.use('/api/login', LoginRouter)


const PORT = process.env.PORT || 4022

server.get('/', (req, res) =>{
    res.send("Welcome to serverland")
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})