
import User from '../models/user';
import * as express from 'express';
import Product from '../models/product';
import ProductStat from '../models/productStat';

export const getCustomers = async (req: express.Request, res: express.Response) => {
    try {
        const customers = await User.find({ role: "user" }).select("-password");
        res.status(200).json(customers);

    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}
export const getProducts = async (req: express.Request, res: express.Response) => {
    try {
        const products = await Product.find();
        const productsWithStat = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id
                })
                return {
                    ...product,
                    stat
                }
            })
        );
        res.status(200).json(productsWithStat);
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}