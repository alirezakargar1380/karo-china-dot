import express, {Application} from "express";
const app: Application = express()

require("./routers")(app)

module.exports = app