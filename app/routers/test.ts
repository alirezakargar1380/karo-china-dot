import express, {Request, Response} from "express";
const { uuid } = require('uuidv4');
const Router = express.Router()
const mongoose = require("../db/db")

function adf() {
  const usersSchema = new mongoose.Schema({
      _id: {
          type: String,
          default: function genUUID() {
              return uuid()
          }
      },
      name: String
  })

  const users = mongoose.model('user', usersSchema)

    const testUser = new users({
        name: 'mohsen'
    })

  testUser.save()
}

adf()

Router
    .route('/')
    .get((req: Request, res: Response) => {
        res.send("im ok")
    })

module.exports = Router