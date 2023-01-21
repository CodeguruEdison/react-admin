
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridCallbackDetails, GridSortModel } from '@mui/x-data-grid';
import Header from 'components/header';
import { IPagination } from 'models/common/common.type';

import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { useGetTransactionsQuery } from 'state/api';
import { ITransactionProp, columns } from './transaction.type';


const Transactions: FC<PropsWithChildren<ITransactionProp>> = (props) => {

    const [pageinationState, setPaginationState] = useState<IPagination>({ page: 0, pageSize: 20, sort: {}, search: '' });
    const { page, pageSize, sort, search } = pageinationState;
    const { data, isLoading } = useGetTransactionsQuery(pageinationState)

    useEffect(() => {
        console.log(pageinationState);
    }, [pageinationState]);

    const theme: any = useTheme();
    const handleOnPageStateChange = (value: any) => (key: keyof IPagination) => {
        console.log({ value, key });
        setPaginationState(prv => {
            return {
                ...prv,
                [key]: value
            }
        });
    }
    const handleGridSortModelOnChange = (model: GridSortModel, details: GridCallbackDetails) => {
        const sortModel = { ...model };
        handleOnPageStateChange(sortModel)('sort');
    }
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
            <Box height="80vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
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
                }}>
                <DataGrid loading={isLoading || !data} getRowId={(row) => row._id}
                    rows={(data && data.transactions) || []}
                    columns={columns}
                    rowCount={data && data.total}
                    rowsPerPageOptions={[20, 50, 100]}
                    pagination={true}
                    page={page}
                    pageSize={pageSize}
                    paginationMode="server"
                    sortingMode="server"
                    onPageChange={(value) => handleOnPageStateChange(value)('page')}
                    onPageSizeChange={(value) => handleOnPageStateChange(value)('pageSize')}
                    onSortModelChange={handleGridSortModelOnChange}

                />


            </Box>
        </Box>
    )
}

export default Transactions