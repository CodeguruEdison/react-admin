import { Box, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridColumns } from '@mui/x-data-grid';
import CustomColumnMenu from 'components/datagrid/DataGridCustomColumnMenu';
import Header from 'components/header';
import { IUser } from 'models/user/user.type';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetUserPerformanceQuery } from 'state/api';
import { RootState } from 'state/store';
import { IPerformanceProps } from './performance.type';




const Performance: FC<PropsWithChildren<IPerformanceProps>> = (props) => {
    const theme: any = useTheme();
    const userId = useSelector((state: RootState) => state.global.userId)
    const { data, isLoading } = useGetUserPerformanceQuery(userId);

    useEffect(() => {
        console.log(data);
    }, [data])
    const columns: GridColDef[] = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1,
        },
        {
            field: "userId",
            headerName: "User ID",
            flex: 1,
        },
        {
            field: "createdAt",
            headerName: "CreatedAt",
            flex: 1,
        },
        {
            field: "products",
            headerName: "# of Products",
            flex: 0.5,
            sortable: false,
            renderCell: (params) => params.value.length,
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
        },
    ];
    return (
        <Box m="1.5rem 2.5rem">
            <Header title='PERFORMANCE' subtitle='User Performance'></Header>
            <Box
                mt="40px"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: theme.palette.primary.light,
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderTop: "none",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${theme.palette.secondary[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    loading={isLoading || !data?.sales}
                    getRowId={(row: any) => row?._id}
                    rows={data?.sales || []}
                    columns={columns}
                    components={{
                        ColumnMenu: CustomColumnMenu,
                    }}
                />
            </Box>
        </Box>

    )
}

export default Performance