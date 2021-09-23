const mongoose = require("../db/db")
const { v4 } = require('uuid');

const usersSchema: any = new mongoose.Schema({
    _id: {
        type: String,
        default: function genUUID() {
            return v4()
        }
    },
    id: Number,
    name: String
})

const postsSchema: any = new mongoose.Schema({
    _id: {
        type: String,
        default: function genUUID() {
            return v4()
        }
    },
    user_id: Number,
    text: String
})

module.exports = {
    user: mongoose.model('user', usersSchema),
    post: mongoose.model('post', postsSchema)
}
