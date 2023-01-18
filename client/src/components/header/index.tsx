import { Typography, Box, useTheme } from "@mui/material";
import React, { FC, PropsWithChildren } from 'react'
import { IHeaderProps } from './header.type';

const Header: FC<PropsWithChildren<IHeaderProps>> = (props) => {
    const { title, subtitle } = props;
    const theme: any = useTheme();

    return (
        <Box>
            <Typography variant="h2" color={theme.palette.secondary[100]}
                fontWeight="bold" sx={{ mb: "5px" }}>
                {title}
            </Typography>
            <Typography variant="h5" color={theme.palette.secondary[300]}>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header;