export interface IProductProps extends IProduct {

}
export interface IProduct {
    name: string,
    price: number,
    description: string,
    category: string,
    rating: number,
    supply: number
}
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