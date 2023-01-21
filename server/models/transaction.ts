import mongoose, { model, Schema, Types } from 'mongoose'

export interface ITransaction extends Document {
  userId: string
  cost: string
  products: [Types.ObjectId]
}

const TransactionSchema = new Schema<ITransaction>(
  {
    userId: String,
    cost: String,
    products: {
      type: [Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true },
)

const Transaction = model<ITransaction>('Transaction', TransactionSchema)
export default Transaction
