const mongoose = require("../db/db")
const { uuid } = require('uuidv4');

const usersSchema: any = new mongoose.Schema({
    _id: {
        type: String,
        default: function genUUID() {
            return uuid()
        }
    },
    name: String
})

module.exports = {
    user: mongoose.model('user', usersSchema)
}
