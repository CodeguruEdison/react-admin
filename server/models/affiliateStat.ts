import mongoose, {
  model,
  Schema,
  Document,
  Types,
  SchemaDefinitionProperty,
  ObjectId,
} from 'mongoose'

export interface IAffiliateStat {
  userId: SchemaDefinitionProperty<ObjectId>
  affiliateSales: SchemaDefinitionProperty<ObjectId>[]
}

const AffiliateStatSchema = new Schema<IAffiliateStat>(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'User',
    },
    affiliateSales: {
      type: [Types.ObjectId],
      ref: 'Transaction',
    },
  },
  { timestamps: true },
)

const AffiliaeteState = model<IAffiliateStat>(
  'AffiliateStat',
  AffiliateStatSchema,
)
export default AffiliaeteState
