import React, { FC, PropsWithChildren } from 'react'
import { INavBarProps } from './navbar.type'

import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from '@mui/icons-material';

import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImage from 'assets/profile.jpeg';
import { AppDispatch } from 'state/store';
import { AppBar, useTheme, Toolbar, IconButton, InputBase } from '@mui/material';
import FlexBetween from 'components/FlexBetween';

const NavBar: FC<PropsWithChildren<INavBarProps>> = (props) => {
    const { isSideBarOpen, setIsSideBarOpen, user } = props;
    const dispatch: AppDispatch = useDispatch();
    //TODO :type
    const theme: any = useTheme();
    console.log({ mode: theme.palette.mode });
    const handleIconButtonClick = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }
    return (
        <AppBar sx={{
            position: 'static',
            background: 'none',
            boxShadow: "none"
        }} >

            <Toolbar sx={{ justifyContent: 'space-between' }} >
                {/* LEFT SIDE */}
                <FlexBetween>
                    <IconButton onClick={handleIconButtonClick}>
                        <MenuIcon />
                    </IconButton>
                    <FlexBetween backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
                        <InputBase placeholder="Search ..." />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>
                {/* RIGHT SIDE*/}
                <FlexBetween gap="1.5rem" >
                    <IconButton onClick={() => dispatch(setMode())} >
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlined sx={{ fontSize: '25px' }} />
                        ) : <LightModeOutlined sx={{ fontSize: '25px' }} />
                        }
                    </IconButton >
                    <IconButton>
                        <SettingsOutlined />
                    </IconButton>
                </FlexBetween>
            </Toolbar>
        </AppBar >
    )
}

export default NavBar