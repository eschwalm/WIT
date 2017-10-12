'use strict';

import mongoose from 'mongoose';
import Post from '../models/post';

export const postIndex = function(req, res) {
  Post.find({}, function(err, post) {
    if (err)
      res.send(err);
    res.send(post);
  });
};

export const postCreate = function(req, res) {
  console.log(req.body);
  var newPost = new Post(req.body);
  newPost.save(function(err, post) {
    if (err)
      res.send(err);
    res.send(post);
  });
};

export const postShow = function(req, res) {
  Post.findById(req.params.postId, function(err, post) {
    if (err)
      res.send(err);
    res.send(post);
  });
};

export const postUpdate = function(req, res) {
  Post.findOneAndUpdate(
    {_id: req.params.postId}, req.body, {new: true}, function(err, post) {
    if (err)
      res.send(err);
    res.send(post);
  });
};


export const postDelete = function(req, res) {
  Post.remove({
    _id: req.params.postId
  }, function(err, post) {
    if (err)
      res.send(err);
    res.send({ message: 'Post successfully deleted' });
  });
};
