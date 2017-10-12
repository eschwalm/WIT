import express, { Router } from 'express';
import {
  postIndex,
  postCreate,
  postShow,
  postDelete,
  categoryIndex } from './controllers/posts';

// Initialize the router
const router = Router();

router.route('/posts')
  .get(postIndex)
  .post(postCreate);

router.route('/posts/:postId')
  .get(postShow)
  .delete(postDelete);

router.route('/:category')
  .get(categoryIndex);

export default router;
