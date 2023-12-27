const express = require('express')
const router = express.Router()
const {auth} = require('../middleWare/auth')
const {addPost, getAllPosts, getPost, editPost, deletePost} = require('../controller/post')

router.post('/addPost', auth, addPost)
router.get('/', getAllPosts)
router.get('/getPost/:id', getPost)
router.patch('/editPost/:id', editPost)
router.delete('/deletePost/:id', deletePost)

module.exports = router