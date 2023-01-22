import React, { FC, PropsWithChildren } from 'react'
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import FlexBetween from 'components/FlexBetween';
import { IDataGridCustomToolbarProps } from './dataGridCustomToolbar.type';
const DataGridCustomToolbar: FC<PropsWithChildren<IDataGridCustomToolbarProps>> = (props) => {

    const { onSearchChange, searchInput, onSearchInputChange } = props;
    const handleOnSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        onSearchChange?.(e.target.value);
    }
    const handleIconButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        onSearchChange?.(searchInput || '');
        onSearchInputChange('');
    }

    return (
        <GridToolbarContainer>
            <FlexBetween width="100%">
                <FlexBetween>
                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                </FlexBetween>
                <TextField label="Search..."
                    sx={{ mb: "0.5rem", width: "15rem" }}
                    onChange={handleOnSearchChange}
                    value={searchInput} variant="standard"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleIconButtonClick}>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}>

                </TextField>
            </FlexBetween>
        </GridToolbarContainer>
    )
}

export default DataGridCustomToolbar