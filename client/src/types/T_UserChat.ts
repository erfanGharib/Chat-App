export interface T_UserChat {
    id: number,
    title: string,
    profileImg: string,
    IS_PRIVATE_CHAT: boolean,
    newMessagesNumber: number,
    lastMessage: {
        time: {
            hour: number,
            minute: number,
            isPM: true
        },
        sender?: string,
        text: string
    }
}