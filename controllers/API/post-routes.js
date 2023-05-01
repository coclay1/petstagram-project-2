const express = require('express');
const router = express.Router();
const { Post, Dog } = require('../models');

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// POST route to create a new dog post
router.post('/api/posts', isAuthenticated, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      UserId: req.session.user.id,
      DogId: req.body.dogId,
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create post', error });
  }
});

module.exports = router;
