import express, { Router } from 'express';
import {
  postIndex,
  postCreate,
  postShow,
  postDelete,
  categoryIndex } from './controllers/posts';

import {
  answerCreate,
  answerIndex,
  answerUpdate,
  answerDelete,
  deletePostAnswers
} from './controllers/answers';

// Initialize the router
const router = Router();

// POSTS
router.route('/posts')
  .get(postIndex)
  .post(postCreate);

router.route('/posts/:postId')
  .get(postShow)
  .delete(postDelete)
  .delete(deletePostAnswers);

router.route('/:category')
  .get(categoryIndex);

// ANSWERS
router.route('/posts/:postId/answers')
  .get(answerIndex)
  .post(answerCreate);

router.route('/posts/:postId/answers/:answerId')
  .put(answerUpdate)
  .delete(answerDelete);

export default router;
