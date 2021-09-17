import express from "express";
const Router = express.Router()
const controller = require("../Controller/test.controller")

Router
    .route('/')
    .get(controller.get_users)

module.exports = Router