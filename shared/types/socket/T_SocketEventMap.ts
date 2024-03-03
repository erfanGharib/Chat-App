import { T_UserMsg } from "./T_UserMsg.js";

export type T_SocketEventMap = {
  newMessage: (message: T_UserMsg) => void;
  userJoined: (username: string) => void;
};