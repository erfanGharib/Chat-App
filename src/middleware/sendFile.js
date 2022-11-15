import axios from "axios";
import { baseURL } from "..";

const sendFile = (e, file) => {
    e.preventDefault();
    axios.post(`${baseURL}/api/upload`, file, {
        headers: { "Content-Type": 'image/jpeg' }, 
    })
    .then(res => {
        console.log(res);
    });
}
export default sendFile;