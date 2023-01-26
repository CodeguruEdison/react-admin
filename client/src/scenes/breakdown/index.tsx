import { Box } from '@mui/material'
import BreakdownChart from 'components/breakdownchart'
import Header from 'components/header'
import React from 'react'


const BreakDown = () => {
    return (
        <Box m="1.5rem 2.5rem">
            <Header title='BREAKDOWN' subtitle='Breakdown by Sales Categrory'></Header>
            <Box mt="40px" height="75vh">
                <BreakdownChart isDashboard={false} />
            </Box>

        </Box>
    )
}

export default BreakDown