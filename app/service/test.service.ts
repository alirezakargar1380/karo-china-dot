const {user,post} = require("../Model/test.model")

exports.index = async () => {
    return await user.find().exec()
}

exports.userIndex = async () => {
    return await user.aggregate([{
        $lookup: {
            from: "posts", // collection name in db
            localField: "id",
            foreignField: "user_id",
            as: "posts"
        }
    }]).exec()
}

exports.find_by_id = async (id: string) => {
    return await user.find({
        _id: id
    }).exec()
}

exports.create = async (data: any) => {
    return new post({
        user_id: 1,
        text: "hey this is another test txt"
    }).save()
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