import { Box } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react'
import { IDashboardProps } from './dashboard.type';

export const DashBoard: FC<PropsWithChildren<IDashboardProps>> = (props) => {
    return (
        <Box>DashBoard</Box>
    )
}
export default DashBoard;
