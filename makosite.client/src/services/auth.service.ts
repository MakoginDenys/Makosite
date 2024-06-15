import axiosService from "./axios.service";
import {urls} from "../config/Urls";

export const authService = {
    login: async (data: any) =>
        await axiosService.post(`${urls.auth}/login`, data).then(value => value.data),
    register: async (data: any) =>
        await axiosService.post(`${urls.auth}/register`, data).then(value => value.data)
}
