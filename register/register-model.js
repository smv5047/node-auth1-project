const db = require("../data/db-config")
const bcrypt = require("bcryptjs")

function findById(id) {
    return db("users")
        .where({id})
        .first("id", "username")
}
async function add(user) {
    user.password = await bcrypt.hashSync(user.password, 14)

    const [id] =  await db("users").insert(user)

    return findById(id)

}


module.exports = {
    add,
    findById
}