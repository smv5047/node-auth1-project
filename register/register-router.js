const express = require("express")
const Users = require("./register-model")
const router = express.Router()


router.post('/', async (req, res, next) => {
  try {
      const saved = await Users.add(req.body)
      res.status(201).json(saved)
  } catch (err) {
      next(err)
  }
})

module.exports = router