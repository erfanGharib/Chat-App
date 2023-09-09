const { Server } = require('socket.io');

const socket = (req, res) => {
    // run socket server
    if(res.socket.server.io) {
        console.log('socket already set up');
        res.end();
        return;
    }
    const server = new Server(res.socket.server);
    res.socket.server.io = server;

    // when connection created, call messageHanlder
    server.on('connection', socket => {
        messageHandler(server, socket);
    });

    res.end();
}
const messageHandler = (server, socket) => {
    // listen on socket, when msg created, emit it
    socket.on('createdMsg', msg => {
        console.log('msg: ' + msg);
        socket.broadcast.emit('newIncomingMsg', msg);
    })
}

export default socket;