const express = require("express")
const app = express()
const http = require('http')
const port = 3040

const server = http.createServer(app)

const {Server} = require("socket.io")

const io = new Server(server, { cors: '*' })

io.on("connection", (socket) =>
{
    console.log(`client connected`)
})

server.listen(port, () =>
{
    console.log(`port is up and running on ${port} `)
})