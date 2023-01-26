import { GridColumnMenuContainer, GridFilterMenuItem, HideGridColMenuItem } from '@mui/x-data-grid'
import { IDataGridCustomColumnMenuProps } from './dataGridCustomColumnMenu.type'

const CustomColumnMenu = (props: IDataGridCustomColumnMenuProps) => {
    const { hideMenu, open, currentColumn } = props;
    return (
        <GridColumnMenuContainer hideMenu={hideMenu} currentColumn={currentColumn} open={open}>
            <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
            <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
        </GridColumnMenuContainer>
    )
}

export default CustomColumnMenu
