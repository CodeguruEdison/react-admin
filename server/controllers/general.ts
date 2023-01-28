import User from '../models/user'
import * as express from 'express'
import Transaction from '../models/transaction'
import OverAllStat from '../models/overallStat'

export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    res.status(404).json({ message })
  }
}
export const getDashboradStats = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const currentMonth = 'November'
    const currentYear = '2021'
    const currentDay = '2021-11-15'
    /*RECENT TRANSACTION */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 })
    /**OVER ALL STATUS */
    const overallStat = await OverAllStat.find({ year: currentYear })

    const {
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      dailyData,
      salesByCategory,
    } = overallStat[0]
    const thisMonthStat = monthlyData.find(({ month }) => {
      return month === currentMonth
    })
    const todayStat = dailyData.find(({ date }) => {
      return date === currentDay
    })

    res.status(200).json({
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      dailyData,
      salesByCategory,
      thisMonthStat,
      todayStat,
    })
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    res.status(404).json({ message })
  }
}
