import User from '../models/user'
import * as express from 'express';

export const getUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }
    catch (error: any) {
        res.status(404).json({ message: error?.message })
    }

}