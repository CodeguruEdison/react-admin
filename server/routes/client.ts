import express from 'express';
import { getCustomers } from '../controllers/client';

const router = express.Router();
router.get('/customers', getCustomers);
export default router