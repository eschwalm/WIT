import express, { Router } from 'express';
import {
  postIndex,
  postCreate,
  postShow,
  postDelete } from './controllers/posts';

// Initialize the router
const router = Router();

//POSTS
router.route('/posts')
  .get(postIndex)
  .post(postCreate);

router.route('/posts/:postId')
  .get(postShow)
  .delete(postDelete);


export default router;
