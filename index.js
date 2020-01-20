const express = require("express")
const server = express()
const UserRouter = require("./users/users-router")
const RegisterRouter = require("./register/register-router")
const LoginRouter = require("./login/login-router")
const session = require('express-session')
const KnexSessionStore = require("connect-session-knex")(session)
const dbConfig = require("./data/db-config")

const sessionConfig = {
    name: 'Kangaroo',
    secret: 'keep it secret keep it safe',
    cookie: {
            maxAge: 1000 * 30,
            secure: false,
            httpOnly: true,
    },
    resave:false,
    saveUninitialized: false,
    store: new KnexSessionStore({
        knex: dbConfig,
        createtable: true,
    })
}

server.use(express.json())
server.use(session(sessionConfig))
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