import User from '../models/user'
import express from 'express'
import mongoose, { Error, Types } from 'mongoose'
import AffiliaeteState from '../models/AffiliateStat'
import Transaction from '../models/transaction'
export const getAdmins = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const admins = await User.find({ role: 'admin' }).select('-password')
    res.status(200).json(admins)
  } catch (error) {
    res.status(404).json({ message: (error as any).message })
  }
}
export const getUserPerformance = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { id } = req.params
    // const userWithStats = await User.aggregate([
    //   { $match: { _id: new Types.ObjectId(id) } },
    //   {
    //     $lookup: {
    //       from: 'affiliatestats',
    //       localField: '_id',
    //       foreignField: 'userId',
    //       as: 'affiliateStats',
    //     },
    //   },
    //   { $unwind: '$affiliateStats' },
    // ])
    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: 'affiliatestats',
          localField: '_id',
          foreignField: 'userId',
          as: 'affiliateStats',
        },
      },
      { $unwind: '$affiliateStats' },
    ])
    console.log(userWithStats)
    if (userWithStats?.length > 0) {
      const salesTransactions = await Promise.all(
        userWithStats[0].affiliateStats.affiliateSales.map((id) => {
          return Transaction.findById(id)
        }),
      )

      const filteredSalesTransaction = salesTransactions.filter(
        (t) => t !== null,
      )
      res
        .status(200)
        .json({ user: userWithStats[0], sales: filteredSalesTransaction })
    } else {
      res.status(200).json(null)
    }
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    res.status(404).json({ message })
  }
}
