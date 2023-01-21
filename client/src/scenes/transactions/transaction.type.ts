import { GridColDef } from '@mui/x-data-grid'

export interface ITransactionProp {}
export interface ITransactionResponse {
  total: number
  transactions: ITransaction[]
}
export interface ITransaction {
  _id: string
  userId: string
  createdAt: string
  products: number
}

export const columns: GridColDef[] = [
  {
    field: '_id',
    headerName: 'ID',
    flex: 1,
  },
  {
    field: 'userId',
    headerName: 'User ID',
    flex: 1,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    flex: 1,
  },
  {
    field: 'products',
    headerName: '# of Products',
    flex: 0.5,
    sortable: false,
    renderCell: (params) => params.value.length,
  },
  {
    field: 'cost',
    headerName: 'Cost',
    flex: 1,
    renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
  },
]
