import User from '../models/user'
import express from 'express'
import { Error } from 'mongoose'
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
