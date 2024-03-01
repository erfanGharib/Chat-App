export const getTime = () => {
    let date = new Date;
    return `${date.getHours()}:${date.getMinutes()}`;
}