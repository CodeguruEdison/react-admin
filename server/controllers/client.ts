
import User from '../models/user';
import * as express from 'express';

export const getCustomers = async (req: express.Request, res: express.Response) => {
    try {
        const customers = await User.find({ role: "user" }).select("-password");
        res.status(200).json(customers);

    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}