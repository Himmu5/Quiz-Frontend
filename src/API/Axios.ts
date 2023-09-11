import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://quiz-backend-h7du.onrender.com',
})
export default Axios;
