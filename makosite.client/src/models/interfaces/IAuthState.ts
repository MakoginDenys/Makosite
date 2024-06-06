import {IUser} from "./IUser.ts";

export interface IAuthState {
    accessToken: string | null;
    user: IUser | null
}