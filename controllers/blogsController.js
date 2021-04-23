const express = require('express');
const router = express.Router();

const Blog = require('../models/Blog');

// GET (index) /api/blog/
router.get('/', (req, res) => {
  Blog.find({})
    .then((blogs) => res.json(blogs))
    .catch(console.error);
});

// GET (show) /api/blogs/5eb579b99b05e67b897e860b
router.get('/:id', (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => res.json(blog))
    .catch(console.error);
});

// POST (create) /api/blogs/
router.post('/', (req, res) => {
  Blog.create(req.body)
    .then((blog) => res.status(201).json(blog))
    .catch(console.error);
});

// PUT (update) /api/blogs/5eb579b99b05e67b897e860b
router.put('/:id', (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((blog) => res.json(blog))
    .catch(console.error);
});

// DELETE (delete) /api/blogs/5eb579b99b05e67b897e860b
router.delete('/:id', (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(console.error);
});

module.exports = router;
