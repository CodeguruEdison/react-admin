import { IUser } from "models/user/user.type";

export interface ISideBarProps {
    isNonMobile: boolean;
    isSideBarOpen: boolean;
    drawerWidth: string;
    setIsSideBarOpen: (value: boolean) => void,
    user?: IUser
}

export interface IUserItemProps {
    user?: IUser

}