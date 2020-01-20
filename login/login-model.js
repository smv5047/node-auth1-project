const db = require("../data/db-config")


function findById(id) {
    return db("users")
        .where({id})
        .first("id", "username")
}

function findBy(filter) {
    return db("users")
      .where(filter)
      .select("id", "username", "password")
  }

module.exports = {
    findById,
    findBy
}