import axios from "axios";

import baseURL from "../config/Urls";

const axiosService = axios.create({
    baseURL
});

export default axiosService;
