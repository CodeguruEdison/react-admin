import * as express from 'express'
import OverAllStat from '../models/overallStat'

export const getSales = async (req: express.Request, res: express.Response) => {
  try {
    const overAllStat = await OverAllStat.find()
    res.status(200).json(overAllStat[1])
  } catch (error) {
    const anyError = error as any
    res.status(400).json({ message: anyError.message })
  }
}
