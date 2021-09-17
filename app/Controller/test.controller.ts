import {Request, Response} from "express";
const testService = require("../service/test.service")


exports.get_users = async (req: Request, res: Response) => {
    const ddd = await testService.delete_by_id("6c384a83-06b0-479a-879e-63872763c544")
    console.log(ddd)

    const resutl: object = await testService.index()
    res.send(resutl)

}