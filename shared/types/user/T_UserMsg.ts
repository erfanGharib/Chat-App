export interface T_UserMsg {
    userName: string,
    messageText: string,
    messageMeta: `${string}:${string} ${'pm'|'am'}`,
    chatType: 0 | 1 | 2,
}