import mongoose, { model, Schema, Document } from "mongoose";

export interface IProduct extends Document {
    name: string,
    price: number,
    description: string,
    category: string,
    rating: number,
    supply: number,
    _doc?: any
}
const ProductSchema = new Schema<IProduct>({
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number

}, { timestamps: true })

const Product = model<IProduct>('Product', ProductSchema);
export default Product;


