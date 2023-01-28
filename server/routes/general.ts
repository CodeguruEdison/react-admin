import express from 'express'
import { getUser, getDashboradStats } from '../controllers/general'
const router = express.Router()
router.get('/user/:id', getUser)
router.get('/dashboard', getDashboradStats)
export default router
