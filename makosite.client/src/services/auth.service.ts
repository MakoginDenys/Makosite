import axiosService from "./axios.service";
import {urls} from "../config/Urls";

type RegisterFormData = {
    email: string,
    phoneNumber: string,
    username: string,
    password: string
};

export const authService = {
    login: (data: any) => axiosService.post(`${urls.auth}/login`, data).then(value => value.data),
    register: (data: RegisterFormData) => axiosService.post(`${urls.auth}/register`, data).then(value => value.data)
}
