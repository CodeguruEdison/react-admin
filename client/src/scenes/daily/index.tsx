import React, { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { IDailyProps } from './daily.type'
import Header from 'components/header'
import { Box, useTheme } from '@mui/material'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGetSalesQuery } from 'state/api'
import { IDailyData } from '../products/product.type';
import { ResponsiveLine, Serie } from '@nivo/line'
import DatePicker from 'react-datepicker';
const Daily: FC<PropsWithChildren<IDailyProps>> = (props) => {
    const theme: any = useTheme()
    const [startDate, setStartDate] = useState<Date | null>(new Date("2021-02-01"))
    const [endDate, setEndDate] = useState<Date | null>(new Date("2021-03-01"))
    const { data, isLoading } = useGetSalesQuery();
    useEffect(() => {
        console.log(data);
    }, [data])
    const [formattedData] = useMemo(() => {
        if (!data) return [];
        const { dailyData = [] }: { dailyData: IDailyData[] } = data as any;
        const totalSalesLine: Serie = {
            id: 'totalSales',
            color: theme.palette.secondary.main,
            data: []
        }
        const totalUnitsLine: Serie = {
            id: 'totalUnits',
            color: theme.palette.secondary[600],
            data: []
        }

        dailyData?.forEach((daily) => {
            const { date, totalSales, totalUnits } = daily;
            const dateFormatted = new Date(date);
            if (startDate && endDate) {
                if (dateFormatted > startDate && dateFormatted <= endDate) {
                    const splitDate = date.substring(date.indexOf('-') + 1);
                    totalSalesLine.data.push({ x: splitDate, y: totalSales });
                    totalUnitsLine.data = [
                        ...totalUnitsLine.data,
                        { x: splitDate, y: totalUnits }
                    ]
                }
            }
        })

        const formattedData = [totalSalesLine, totalUnitsLine]
        console.log(formattedData);
        return [formattedData];
    }, [data, startDate, endDate])

    return (
        <Box m="1.5rem 2.5rem">
            <Header title='Daily Sales' subtitle='Daily Sales details'></Header>
            <Box height="75vh">
                <Box display="flex" justifyContent='flex-end'>
                    <Box>
                        <DatePicker selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            startDate={startDate} endDate={endDate}
                            selectsStart
                        />
                    </Box>
                    <Box>
                        <DatePicker selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            startDate={startDate} endDate={endDate}
                            selectsEnd minDate={startDate}
                        />
                    </Box>
                </Box>
                {data ? (
                    <ResponsiveLine
                        data={formattedData || []}
                        theme={{
                            axis: {
                                domain: {
                                    line: {
                                        stroke: theme.palette.secondary[200],
                                    },
                                },
                                legend: {
                                    text: {
                                        fill: theme.palette.secondary[200],
                                    },
                                },
                                ticks: {
                                    line: {
                                        stroke: theme.palette.secondary[200],
                                        strokeWidth: 1,
                                    },
                                    text: {
                                        fill: theme.palette.secondary[200],
                                    },
                                },
                            },
                            legends: {
                                text: {
                                    fill: theme.palette.secondary[200],
                                },
                            },
                            tooltip: {
                                container: {
                                    color: theme.palette.primary.main,
                                },
                            },
                        }}
                        colors={{ datum: 'color' }}
                        margin={{ top: 50, right: 50, bottom: 70, left: 60 }
                        }
                        xScale={{ type: "point" }}
                        yScale={{
                            type: "linear",
                            min: "auto",
                            max: "auto",
                            stacked: false,
                            reverse: false,
                        }}
                        yFormat=" >-.2f"
                        curve="catmullRom"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{

                            //orient: "bottom",
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 90,
                            legend: "Month",
                            legendOffset: 36,
                            legendPosition: "middle",
                        }}
                        axisLeft={{
                            // orient: "left",
                            tickValues: 5,
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: "Total",
                            legendOffset: -50,
                            legendPosition: "middle",
                        }}

                        enableGridX={false}
                        enableGridY={false}
                        pointSize={10}
                        pointColor={{ theme: "background" }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: "serieColor" }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={
                            [
                                {
                                    anchor: "top-right",
                                    direction: "column",
                                    justify: false,
                                    translateX: 50,
                                    translateY: 0,
                                    itemsSpacing: 0,
                                    itemDirection: "left-to-right",
                                    itemWidth: 80,
                                    itemHeight: 20,
                                    itemOpacity: 0.75,
                                    symbolSize: 12,
                                    symbolShape: "circle",
                                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                                    effects: [
                                        {
                                            on: "hover",
                                            style: {
                                                itemBackground: "rgba(0, 0, 0, .03)",
                                                itemOpacity: 1,
                                            },
                                        },
                                    ],
                                },
                            ]

                        }


                    />
                ) : <>Loading..</>}

            </Box>
        </Box>
    )
}

export default Daily