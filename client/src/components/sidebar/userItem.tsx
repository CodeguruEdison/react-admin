import React, { PropsWithChildren, FC } from 'react'
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import FlexBetween from 'components/FlexBetween';
import profileImage from 'assets/profile.jpeg'
import { IUserItemProps } from './sidebar.type';
import {
    SettingsOutlined
} from '@mui/icons-material';
const UserItem: FC<PropsWithChildren<IUserItemProps>> = (props) => {
    const { user } = props;
    const theme: any = useTheme();
    return (
        <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
                <Box
                    component="img"
                    alt="profile"
                    src={profileImage}
                    height="40px"
                    width="40px"
                    borderRadius="50%"
                    sx={{ objectFit: "cover" }}
                />
                <Box textAlign="left">
                    <Typography
                        fontWeight="bold"
                        fontSize="0.9rem"
                        sx={{ color: theme.palette.secondary[100] }}
                    >
                        {user?.name}
                    </Typography>
                    <Typography
                        fontSize="0.8rem"
                        sx={{ color: theme.palette.secondary[200] }}
                    >
                        {user?.occupation}
                    </Typography>
                </Box>
                <SettingsOutlined
                    sx={{
                        color: theme.palette.secondary[300],
                        fontSize: "25px ",
                    }}
                />
            </FlexBetween>
        </Box>
    )
}

export default UserItem;