import React from 'react'
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import FlexBetween from 'components/FlexBetween';
const DataGridCustomToolbar = () => {
    return (
        <GridToolbarContainer>
            <FlexBetween width="100%">
                <FlexBetween>
                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                </FlexBetween>
                <TextField label="searxh..." sx={{ mb: "0.5rem", width: "15rem" }}>

                </TextField>
            </FlexBetween>
        </GridToolbarContainer>
    )
}

export default DataGridCustomToolbar