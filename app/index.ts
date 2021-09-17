import express, {Application} from "express";
const app: Application = express()
const cors = require("cors");

app.use(express.json());
app.use(cors());

require("./Routers")(app)

module.exports = app