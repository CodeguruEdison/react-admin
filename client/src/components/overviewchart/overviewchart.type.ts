export interface IOverviewChartProps {
  view: string
  isDashboard?: boolean
}
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX; 
export interface IUnitXYDataRow {
     x:string,
     y:number
}
export interface ILineChartData {
    id:string,
    color:Color,
    data:IUnitXYDataRow[]

}