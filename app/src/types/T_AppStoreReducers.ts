// export type T_AppStoreReducers = (
//     { '$_main': any } |
//     { '$_userChat': any } |
//     { '$_userContacts': any } |
//     { '$_pushSlideData': any } |
//     { '$_profileSidebar': any } |
//     { '$_reportBugModal': any } |
//     { '$_theme': any } |
//     { '$_userMsg': any }
// )
export type T_AppStoreReducers = {
    [
        key in '$_main' |
        '$_userChat' |
        '$_userContacts' |
        '$_pushSlideData' |
        '$_profileSidebar' |
        '$_reportBugModal' |
        '$_theme' |
        '$_userMsg'
    ]: any
}

// type x = { [T extends T_AppStoreReducers]: string }