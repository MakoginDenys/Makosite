import {IUser} from "./interfaces/IUser.ts";

export class User implements IUser {
    constructor(
        _id: number,
        _email: string,
        _password: string,
        _phoneNumber: string,
        _username: string,
        _photo: string
    ) {
        this.id = _id;
        this.email = _email;
        this.password = _password;
        this.phoneNumber = _phoneNumber;
        this.username = _username;
        this.photo = _photo;
    }

    public id: number;
    public email: string;
    public password: string;
    public phoneNumber: string;
    public username: string;
    public photo: string;
}