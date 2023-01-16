import React, { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/navbar';
import SideBar from 'components/sidebar';


const Layout = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

    const handleOnSideBarOpen = (value: boolean) => {
        setIsSideBarOpen(value)
    }
    return (
        <Box width="100%" height="100%" display={isNonMobile ? 'flex' : 'block'} >
            <SideBar isNonMobile drawerWidth="250px" isSideBarOpen={isSideBarOpen} setIsSideBarOpen={handleOnSideBarOpen} />
            <Box>
                <Navbar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={handleOnSideBarOpen} />
                <Outlet />
            </Box>
        </Box>
    );
}

export default Layout