
export interface IUser {
    name: string,
    email: string;
    password: string;
    city: string;
    occupation: string;
    state: string;
    country: string;
    phoneNumber: string
    transactions?: any[],
    role: "user" | "admin" | "superadmin"
}