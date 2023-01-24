import { model, Schema } from 'mongoose'
import mongoose from 'mongoose'
import { IDailyData, IMonthlyData } from './productStat'

export interface IOverAllStat {
  totalCustomers: number
  yearlySalesTotal: number
  yearlyTotalSoldUnits: number
  year: number
  monthlyData: IMonthlyData[]
  dailyData: IDailyData[]
  salesByCategory: Map<string, number>
}
const OverAllStatSchema = new Schema<IOverAllStat>(
  {
    totalCustomers: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    salesByCategory: {
      type: Map,
      of: Number,   
    },
  },
  { timestamps: true },
)
const OverAllStat = model<IOverAllStat>('OverAllStat', OverAllStatSchema)
export default OverAllStat
