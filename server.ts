// import express, {Request, Response, Application} from "express";
// const express = require("express")

// const server: Application = express()
//
// server.get('/', (req: Request, res: Response) => {
//     res.send('hello')
// })
//
// server.listen(3000,() => {
//     console.log('running on port http://localhost:3000')
// })

const app = require('./app');

app.listen(3000,() => {
    console.log('running on port http://localhost:3000')
})
