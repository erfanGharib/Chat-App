import { T_SocketEventMap } from 'chat-app/shared/types/socket/T_SocketEventMap.js';
import { Server } from 'socket.io';
import http from 'http';

export const initSocket = (httpServer: http.Server) => {
    const io: Server<
        T_SocketEventMap,
        T_SocketEventMap,
        T_SocketEventMap,
        any
    > = new Server(httpServer, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', function (socket) {
        socket.on('newMessage', function (data) {
            socket.broadcast.emit('newMessage', data);
            
            console.log(data);
        });
        
        console.log('User Connected With Id:', socket.id);
    });

    io.listen(httpServer);
};
