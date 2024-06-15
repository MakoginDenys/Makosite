import axiosService from "./axios.service";
import {urls} from "../config/Urls";

type RegisterFormData = {
    email: string,
    phoneNumber: string,
    username: string,
    password: string
};

export const authService = {
    login: async (data: any) => await axiosService.post(`${urls.auth}/login`, data).then(value => value.data),
    register: async (data: RegisterFormData) => await axiosService.post(`${urls.auth}/register`, data).then(value => value.data)
}
