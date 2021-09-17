const base64 = require('base-64');
const _ = require("lodash")
var isBase64 = require('is-base64');

module.exports = (socket: any) => {
    try {
        const queryKeys = Object.keys(socket.handshake.query)
        const userDetailBase64 = _.find(queryKeys, (item: any) => {
            if (isBase64(item, {
                paddingRequired: false,
                mimeRequired: true
            })) { return item }
        })

        if (userDetailBase64.length <= 3)
            return socket.emit('error', "errormessage")

        const decode_user_detail = JSON.parse(base64.decode(userDetailBase64))
        console.log(decode_user_detail)
        // JSON.parse(atob(socket.handshake.query))
        console.log(socket.broadcast.adapter.rooms)
        socket.emit('connection', socket.id);
        socket.on("disconnect", async () => {
            // socket.broadcast.disconnectSockets()
            socket.leave(socket.id)
            console.log("socket leave...")
            console.log(socket.broadcast.adapter.rooms)
        })

    } catch (e) {
        socket.emit('error', e)
    }
}