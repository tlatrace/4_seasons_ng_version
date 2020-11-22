const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get back all the posts
router.get('/', async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.json({message: err});
    }
});

//get back a specific post
router.get('/:id', async (req, res) => {
    try {
      specificPost = await Post.findById(req.params.id);
      res.json(specificPost);
    } catch(err) {
      res.json({message: err});
    }
  }
);

//submit a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  //save the post in the mongo database
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({message: err});
  }
});

//delete a specific post
router.delete('/:id', async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({_id: req.params.id});
    res.json(removedPost);
  } catch(err) {
    res.json({message: err})
  }
});

//update a specific post
router.patch('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      {_id: req.params.id},
      {$set: {title: req.body.title}});
    res.json(updatedPost);
  } catch(err) {
    res.json({message: err});
  }
})

module.exports = router
