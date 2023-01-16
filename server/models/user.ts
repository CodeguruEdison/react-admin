import mongoose, { model, Schema } from "mongoose";

export interface IUser {
    name: string,
    email: string;
    password: string;
    city: string;
    occupation: string;
    state: string;
    country: string;
    phoneNumber: string
    transactions: any[],
    role: "user" | "admin" | "superadmin"
}
const UserSchema = new Schema<IUser>({
    name: { type: String, required: true, min: 2, max: 100 },
    email: { type: String, required: true, max: 50, unique: true },
    password: { type: String, required: true, min: 5 },
    city: String,
    occupation: String,
    state: String,
    country: String,
    phoneNumber: String,
    transactions: Array,
    role: {
        type: String,
        default: "admin"
    }

}, { timestamps: true })

const User = model<IUser>('User', UserSchema);

