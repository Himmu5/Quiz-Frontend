import axios from "axios";

const Axios = axios.create({
    //backend is now deployed on Railway
    baseURL: 'https://nodejs-production-a554.up.railway.app/',
})
export default Axios;
