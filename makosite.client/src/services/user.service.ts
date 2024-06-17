import axiosService from "./axios.service";
import {urls} from "../config/Urls";

export const userService = {
    getUserByUsername: async (username: any) =>
        await axiosService.get(`${urls.user}/${username}`).then(value => value.data)
}