import { io, Socket } from "socket.io-client";

let socket: Socket = null;

export const getSocket = () => {
    console.log(socket);
    
    if(socket) return socket;
    socket = io('http://192.168.1.70:5000')
    return socket;
}