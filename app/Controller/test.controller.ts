import {Request, Response} from "express";
const testService = require("../service/test.service")


exports.get_users = async (req: Request, res: Response) => {
    const ddd = await testService.create()
    console.log(ddd)

    const resutl: object = await testService.userIndex()
    res.send(resutl)
}