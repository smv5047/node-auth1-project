const bcrypt = require("bcryptjs")
const express = require("express")

const userModel = require("../users/users-model")

module.exports = function restricted() {
    const authError = {
        message: "You shall nto pass!"
    }

    return async (req, res, next) => {
        try{
            const {username, password} = req.headers

            if (!username || !password) {
                return res.status(401).json(authError)
            }

            const user = await userModel.findBy({username}).first()

            if(!user) {
                return res.status(401).json(authError)
            }

            const passwordValid = await bcrypt.compare(password, user.password)

            if(!passwordValid) {
                return res.status(401).json(authError)
            }

            next()
        } catch (err) {
            next(err)
        }
    }
}