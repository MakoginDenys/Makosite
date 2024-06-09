import axiosService from "./axios.service";
import {urls} from "../config/Urls";

export const authService = {
    login: () => axiosService.get(`${urls.auth}/login`).then(value => value.data),
    register: () => axiosService.get(`${urls.auth}/register`).then(value => value.data)
}
