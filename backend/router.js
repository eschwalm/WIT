import express, { Router } from 'express';
import {
  postIndex,
  postCreate,
  postShow,
  postUpdate,
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
  .put(postUpdate);

router.route('/:category')
  .get(categoryIndex);


// ANSWERS
router.route('/posts/:postId/answers')
  .get(answerIndex)
  .post(answerCreate)
  .delete(deletePostAnswers);

router.route('/posts/:postId/answers/:answerId')
  .put(answerUpdate)
  .delete(answerDelete);

export default router;
