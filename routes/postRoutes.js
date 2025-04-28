const express = require('express');
const router = express.Router();
const postController = require('../controller/postController')

router.get('/posts', postController.getAllPost);
router.get('/posts/:noBook', postController.getDetailPost);
router.post('/posts/', postController.createPost);
router.patch('/posts/:id', postController.updatePost);

module.exports = router
