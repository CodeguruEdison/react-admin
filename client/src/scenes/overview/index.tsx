import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Header from 'components/header'
import OverViewChart from 'components/overviewchart'
import React, { FC, PropsWithChildren, useState } from 'react'
import { IOverViewProps } from './overview.type'



const OverView: FC<PropsWithChildren<IOverViewProps>> = (props) => {
    const [view, setView] = useState('units');
    const handleOnViewChange = (e: SelectChangeEvent, child: React.ReactNode) => {
        setView(e.target.value);
    }
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="OVERVIEW" subtitle='Sales Overview'></Header>
            <Box height="75vh" >
                <FormControl sx={{ mt: "1rem" }}>
                    <InputLabel>View</InputLabel>
                    <Select value={view} label="VIEW" onChange={handleOnViewChange}>
                        <MenuItem value="sales">Sales</MenuItem>
                        <MenuItem value="units">Units</MenuItem>
                    </Select>
                </FormControl>
                <OverViewChart view={view} />
            </Box>
        </Box>
    )
}

export default OverView