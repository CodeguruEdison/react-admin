import { IUser } from "models/user/user.type";

export interface ICustomer extends IUser {
    _id: string;
}