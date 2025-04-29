const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator')
const postController = require('../controller/postController');
const { postValidators } = require('../validators/postValidators');

router.get('/posts', postController.getAllPost);

router.get('/posts/:noBook', postController.getDetailPost);

router.post('/posts', postValidators(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            message: 'Validasi Gagal',
            errors: errors.array().map(err => ({
                field: err.path,
                message: err.msg
            }))
        });
    }
    postController.createPost(req, res);
});
  

router.patch('/posts/:id', postValidators() , (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            message: 'Validasi Gagal',
            errors: errors.array().map(err => ({
                field: err.path,
                message: err.msg
            }))
        });
    }

    postController.updatePost(req, res)
});

router.delete('/posts/:id', postController.deletePost);

module.exports = router
