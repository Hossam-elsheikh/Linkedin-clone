const express = require('express')
const router = express.Router()
const {auth} = require('../middleWare/auth')
const {addPost, getAllPosts, getPost, editPost, deletePost, addLike} = require('../controller/post')

// router.post('/addPost', addPost)
router.post('/addPost', auth, addPost)
router.get('/', getAllPosts)
router.get('/getPost/:id', getPost)
router.patch('/editPost/:id', editPost)
router.delete('/deletePost/:id', deletePost)
router.put('/addLike', auth, addLike)

module.exports = router