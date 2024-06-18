import axiosService from "./axios.service";
import {urls} from "../config/Urls";

export const userService = {
    getUserByUsername: async (username: any) =>
        await axiosService.get(`${urls.user}/${username}`).then(value => value.data),
    updateUser: async (user: any) =>
        await axiosService.put(`${urls.user}/update`, user).then(value => value.data)
}