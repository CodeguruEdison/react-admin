import mongoose, { model, Schema } from "mongoose";

export interface IMonthlyData {
    month: string,
    totalSales: number
    totalUnits: number
}
export interface IDailyData {
    date: string,
    totalSales: number
    totalUnits: number

}
export interface IProductStat {
    productId: string,
    yearlySalestotal: number,
    yearlyTotalSoldUnits: number,
    year: number,
    monthlyData: IMonthlyData[],
    dailyData: IDailyData[]
}
const ProductStatSchema = new Schema<IProductStat>({
    productId: String,
    yearlySalestotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number
        }

    ],
    dailyData: [
        {
            date: String,
            totalSales: Number,
            totalUnits: Number
        }

    ]

}, { timestamps: true })

const ProductStat = model<IProductStat>('ProductStat', ProductStatSchema);
export default ProductStat;


