import express from 'express';

import {signin,signup,addfav,getPosts,deletePost} from '../controllers/user.js'
import auth from '../middleware/auth.js';

const router = express.Router();

//video 1:50:09 for auth for fav

//this rotues would be localhost:500/posts


router.post('/signin',signin);
router.post('/signup',signup);
router.patch('/:id',auth,addfav);
router.get('/:id',auth,getPosts);
router.patch('/remove/:id',auth, deletePost);

export default router