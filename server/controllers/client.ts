import User from '../models/user'
import * as express from 'express'
import Product from '../models/product'
import ProductStat from '../models/productStat'
import Transaction from '../models/transaction'
import getCountryIso3 from 'country-iso-2-to-3'
import { access } from 'fs'

export const getCustomers = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const customers = await User.find({ role: 'user' }).select('-password')
    res.status(200).json(customers)
  } catch (error) {
    const anyError = error as any
    res.status(400).json({ message: anyError.message })
  }
}
export const getProducts = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const products = await Product.find()
    const productsWithStat = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        })
        return {
          ...product._doc,
          stat,
        }
      }),
    )
    res.status(200).json(productsWithStat)
  } catch (error) {
    const anyError = error as any
    res.status(400).json({ message: anyError.message })
  }
}

export const getTransactions = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const {
      page = 1,
      pageSize = 20,
      sort = null,
      search = '',
    }: {
      page: number
      pageSize: number
      sort: any
      search: string
    } = req.query as any
    const generatedSort = () => {
      const sortParsed = JSON.parse(sort as any)
      const sortedFormatted = {
        [sortParsed.field]: sortParsed.sort = 'asc' ? 1 : -1,
      }
      return sortedFormatted
    }
    const sortFormatted: any = Boolean(sort) ? generatedSort() : {}
    const cursor = Transaction.collection
      .find({
        $or: [
          { cost: { $regex: new RegExp(search, 'i') } },
          { userId: { $regex: new RegExp(search, 'i') } },
        ],
      })
      .sort(sortFormatted)

    const total = await cursor.count()
    const transactions = await cursor
      .skip(page * pageSize)
      .limit(Number(pageSize))
      .toArray()

    res.status(200).json({
      transactions,
      total,
    })
  } catch (error) {
    const anyError = error as any
    res.status(404).json({ message: anyError.message })
  }
}
export const getGeography = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const users = await User.find()

    const mappedLocations = users.reduce((acc, user) => {
      const { country } = user
      const countryISO3: string = getCountryIso3(country)
      if (!acc.has(countryISO3)) {
        acc.set(countryISO3, 0)
      }
      const newValue = (acc.get(countryISO3) || 0) + 1
      acc.set(countryISO3, newValue)
      return acc
    }, new Map<string, number>())

    const formattedLocations = [...mappedLocations].map(([key, value]) => {
      return { id: key, value: value }
    })
    res.status(200).json(formattedLocations)
  } catch (error) {
    const anyError = error as any
    res.status(404).json({ message: anyError.message })
  }
}
