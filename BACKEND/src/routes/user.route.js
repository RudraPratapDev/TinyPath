import express from 'express'


import {authMiddleware} from "../middleware/auth.middleware.js"
import { getAllUserUrls } from '../controllers/user.controller.js';


const router=express.Router();

router.post("/urls",authMiddleware,getAllUserUrls)

export default router;