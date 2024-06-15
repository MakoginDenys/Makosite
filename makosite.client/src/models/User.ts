import {IUser} from "./interfaces/IUser.ts";

export class User implements IUser {
    constructor(
        _id: number,
        _email: string,
        _password: string,
        _phoneNumber: string,
        _username: string,
        _photo: string,
        _description: string,
        _about: string
    ) {
        this.id = _id;
        this.email = _email;
        this.password = _password;
        this.phoneNumber = _phoneNumber;
        this.userName = _username;
        this.photo = _photo;
        this.description = _description;
        this.about = _about;
    }

    public id: number;
    public email: string;
    public password: string;
    public phoneNumber: string;
    public userName: string;
    public photo: string;
    public description: string;
    public about: string;
}