import React, { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/navbar';
import SideBar from 'components/sidebar';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';
import { useGetUserQuery } from 'state/api';
import { IUser } from 'models/user/user.type';


const Layout = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

    const userId = useSelector((state: RootState) => state.global.userId);
    const { data: user, isError, isLoading } = useGetUserQuery(userId);
    //console.log({ user });



    const handleOnSideBarOpen = (value: boolean) => {
        setIsSideBarOpen(value)
    }
    return (
        <Box width="100%" height="100%" display={isNonMobile ? 'flex' : 'block'} >

            <SideBar isNonMobile drawerWidth="250px" isSideBarOpen={isSideBarOpen} setIsSideBarOpen={handleOnSideBarOpen} user={user} />
            <Box flexGrow={1}>
                <Navbar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={handleOnSideBarOpen} user={user} />
                <Outlet />
            </Box>
        </Box>
    );
}

export default Layout