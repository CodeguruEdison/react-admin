import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { ISideBarProps } from './sidebar.type'
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import {
    SettingsOutlined, ChevronLeft, ChevronRightOutlined, HomeOutlined, AdminPanelSettingsOutlined,
    CalendarMonthOutlined, Groups2Outlined, PieChartOutlined, PointOfSaleOutlined, PublicOutlined,
    ReceiptLongOutlined, ShoppingCartOutlined, TodayOutlined,
    TrendingUpOutlined
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import profileImage from 'assets/profile.jpeg'
import Drawer from '@mui/material/Drawer';
import FlexBetween from 'components/FlexBetween';
import UserItem from './userItem';
const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />,
    },
    {
        text: "Client Facing",
        icon: null,
    },
    {
        text: "Products",
        icon: <ShoppingCartOutlined />,
    },
    {
        text: "Customers",
        icon: <Groups2Outlined />,
    },
    {
        text: "Transactions",
        icon: <ReceiptLongOutlined />,
    },
    {
        text: "Geography",
        icon: <PublicOutlined />,
    },
    {
        text: "Sales",
        icon: null,
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />,
    },
    {
        text: "Daily",
        icon: <TodayOutlined />,
    },
    {
        text: "Monthly",
        icon: <CalendarMonthOutlined />,
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined />,
    },
    {
        text: "Management",
        icon: null,
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />,
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />,
    },
];
const SideBar: FC<PropsWithChildren<ISideBarProps>> = (props) => {
    const { isNonMobile,
        isSideBarOpen,
        drawerWidth,
        setIsSideBarOpen,
        user
    } = props;
    const { pathname } = useLocation();
    const [active, setActive] = useState('');
    const navigate = useNavigate();
    const theme: any = useTheme();
    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])



    return (
        <Box component="nav">
            {isSideBarOpen &&
                (<Drawer open={isSideBarOpen} onClose={() => setIsSideBarOpen(false)}
                    variant="persistent" anchor='left'
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSixing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width="100%">
                        {/*TRBL */}
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                    <Typography variant="h4" fontWeight="bold">ECOMVISON</Typography>
                                </Box>
                                {!isNonMobile &&
                                    (<IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>)
                                }
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                            {text}
                                        </Typography>
                                    );
                                }
                                const lcText = text.toLowerCase();
                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            sx={{
                                                backgroundColor: active === lcText ?
                                                    theme.palette.secondary[300] : "transparent",
                                                color: active === lcText
                                                    ? theme.palette.primary[600]
                                                    : theme.palette.secondary[100],
                                            }}
                                            onClick={() => {
                                                navigate(`/${lcText}`);
                                                setActive(lcText)
                                            }}>
                                            <ListItemIcon
                                                sx={{
                                                    ml: '2rem',
                                                    color: active === lcText
                                                        ? theme.palette.primary[600]
                                                        : theme.palette.secondary[200]
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text}>
                                                {active === lcText && (
                                                    <ChevronRightOutlined sx={{ ml: "auto" }} />
                                                )}
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}


                        </List>
                    </Box>
                    <UserItem user={user} />

                </Drawer >)
            }
        </Box >
    )
}

export default SideBar