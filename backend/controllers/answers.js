'use strict';

import mongoose from 'mongoose';
import Answer from '../models/answer';
import Post from '../models/post';

export const answerIndex = function(req, res) {
  Answer.find({ post_id: req.params.postId })
    .sort({ 'upvotes': -1 }).exec(function(err, answer) {
    if (err)
      res.send(err);
    res.send(answer);
  });
};

export const answerCreate = function(req, res) {
  var newAnswer = new Answer(req.body);
  newAnswer.post_id = req.params.postId;
  newAnswer.save(function(err, answer) {
    if (err)
      res.send(err);
    res.send(answer);
  });
  Post.findOneAndUpdate({_id: req.params.postId });
};

export const answerShow = function(req, res) {
  Answer.findById(req.params.answerId, function(err, answer) {
    if (err)
      res.send(err);
    res.send(answer);
  });
};

export const answerUpdate = function(req, res) {
  Answer.findOneAndUpdate(
    {_id: req.params.answerId}, req.body, {new: true}, function(err, answer) {
    if (err)
      res.send(err);
    res.send(answer);
  });
  Post.findOneAndUpdate({_id: req.params.postId });
};

export const deletePostAnswers = function(req, res) {
  Answer.deleteMany({ post_id: req.params.postId }, function(err, ans) {
    if (err)
      res.send(err);
    res.send({ message: `Answers for ${req.params.postId} deleted`});
  });
};

export const answerDelete = function(req, res) {
  Answer.remove({
    _id: req.params.answerId
  }, function(err, answer) {
    if (err)
      res.send(err);
    res.send({ message: 'Answer successfully deleted' });
  });
};
