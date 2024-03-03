export const getTime = () => {
    const date = new Date();
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return time;
}