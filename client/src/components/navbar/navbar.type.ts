import { IUser } from "models/user/user.type";

export interface INavBarProps {
    isSideBarOpen?: boolean,
    setIsSideBarOpen: (value: boolean) => void,
    user?: IUser
}