import { ISalesCategory } from 'models/common/common.type'
import { IDailyData, IMonthlyData } from 'scenes/products/product.type'
import { ITransaction } from 'scenes/transactions/transaction.type'

export interface IDashboardProps {}

export interface IStatData {
  totalSales: number
  totalUnits: number
  _id: string
}

export interface IDashboardData {
  dailyData: IDailyData
  monthlyData: IMonthlyData
  salesByCategory: ISalesCategory
  thisMonthStats: IStatData & { month: string }
  todaysStat: IStatData & { date: string }
  totalCustomers: number
  yearlySalesTotal: number
  yearlyTotalSoldUnits: number
  transactions: ITransaction[]
}
