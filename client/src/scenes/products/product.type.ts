export interface IProductsProps {}

export interface IProductListProps {
  products: IProduct[]
}
export interface IProductProps extends IProduct {}
export interface IProduct {
  _id?: string
  name: string
  price: number
  description: string
  category: string
  rating: number
  supply: number
  stat: IProductStat
}
export interface IMonthlyData {
  month: string
  totalSales: number
  totalUnits: number
}
export interface IDailyData {
  date: string
  totalSales: number
  totalUnits: number
}
export interface IProductStat {
  productId: string
  yearlySalesTotal: number
  yearlyTotalSoldUnits: number
  year: number
  monthlyData: IMonthlyData[]
  dailyData: IDailyData[]
}
