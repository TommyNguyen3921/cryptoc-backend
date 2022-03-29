import express from 'express';

import {signin,signup,addfav,getPosts,deletePost} from '../controllers/user.js'
import auth from '../middleware/auth.js';

const router = express.Router();

//video 1:50:09 for auth for fav




router.post('/signin',signin);
router.post('/signup',signup);
router.patch('/:id',addfav);
router.get('/:id',getPosts);
router.patch('/remove/:id', deletePost);

export default router