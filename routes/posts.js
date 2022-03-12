import express from 'express';

import {getPosts,createPosts, deletePost} from '../controllers/posts.js'
const router = express.Router();

//this rotues would be localhost:500/posts
router.get('/',getPosts);

router.post('/',createPosts);

router.delete('/:id', deletePost);

 export default router