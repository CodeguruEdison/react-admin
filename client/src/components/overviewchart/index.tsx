import { Box, useTheme } from '@mui/material';
import React, { FC, PropsWithChildren, useEffect, useMemo } from 'react'
import { useGetSalesQuery } from 'state/api';
import { IOverviewChartProps } from './overviewchart.type'
import { ResponsiveLine } from '@nivo/line'

const OverViewChart: FC<PropsWithChildren<IOverviewChartProps>> = (props) => {

    const theme: any = useTheme();
    const { view, isDashBoard = false } = props;
    const { data, isLoading } = useGetSalesQuery();
    const [totalSalesLine, totalUnitLines] = useMemo(() => {
        if (!data) return [];
        const { monthlyData = [] } = data;
        const totalSaleLine = {
            id: "totalSales",
            color: theme.palette.secondary.main,
            data: []
        }


    }, [data])
    useEffect(() => {
        console.log({ data });
    }, [data])
    return (
        <Box>
            {/* <ResponsiveLine>

            </ResponsiveLine> */}
        </Box>
    )
}

export default OverViewChart