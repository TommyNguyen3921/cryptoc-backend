import express from 'express';

import {signin,signup} from '../controllers/user.js'
const router = express.Router();

//this rotues would be localhost:500/posts


router.post('/signin',signin);
router.post('/signup',signup);


export default router