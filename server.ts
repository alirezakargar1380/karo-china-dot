const app = require('./app');
import http from "http";
const server = http.createServer(app);

const io = require("socket.io")(server, {
    path: '/socket/',
    cors: true,
});

io.on('connection', (socket: any) => {
    console.log("socket connected --> "+socket.id)
    return require("./MainSocket")(socket)
});

server.listen(3000,() => {
    console.log('running on port http://localhost:3000/api')
})
