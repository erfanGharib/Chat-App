import { io, Socket } from "socket.io-client";
import { T_SocketEventMap } from "../../../shared/types/socket/T_SocketEventMap";
import { configs } from "../global/configs";

let socket: Socket<T_SocketEventMap> = null;

export const getSocket = () => {
    console.log(socket);
    
    if(socket) return socket;
    return socket = io(configs.apiBaseUrl);
}