export const emailRegex    = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const slugRegex     = /^[^\s]+$/;
export const NaNCharRegex  = /[^0-9.]+/g;
export const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
export const urlRegex      = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$|^$/;
export const youtubeEmbedUrlRegex = /https:\/\/youtu\.be\//;
export const commaSeparatedRegex  = /^([^,\s]+(,[^,\s]+)*)?$/;

export const passwordMessage = 'Password must 8 characters long, contains at least one uppercase letter and one digit';

// const isValidPassword = (password: string) => {
//     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password.trim());
// }
// const isValidUsername = (username: string) => {
//     return /^[a-zA-Z]{6,}/.test(username);
// }
// const isValidURL = (url: string) => {
//     return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/).*\w\..*\w$/.test(url);
// }