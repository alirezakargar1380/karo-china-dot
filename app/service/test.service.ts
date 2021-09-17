const {user} = require("../Model/test.model")

exports.index = async () => {
    return await user.find().exec()
}

exports.find_by_id = async (id: string) => {
    return await user.find({
        _id: id
    }).exec()
}

exports.update_by_id = async (id: string) => {
    return await user.findOneAndUpdate({
        _id: id
    }, { name: "alireza" })
        .exec()
}

exports.delete_by_id = async (id: string) => {
    return await user.deleteOne({
        _id: id
    }).exec()
}