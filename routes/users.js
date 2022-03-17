import express from 'express';

import {signin,signup,addfav} from '../controllers/user.js'
const router = express.Router();

//this rotues would be localhost:500/posts


router.post('/signin',signin);
router.post('/signup',signup);
router.patch('/:id',addfav);

export default router