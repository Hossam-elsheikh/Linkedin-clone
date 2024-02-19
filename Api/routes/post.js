const express = require('express')
const router = express.Router()
const { auth } = require('../middleWare/auth')
const { addPost, getAllPosts, getPost, editPost, deletePost, addLike, getLikes, addComment, addReply, editComment, editReply, deleteComment, deleteReply,getComment, getReply} = require('../controller/post')

router.post('/addPost', auth, addPost)
router.get('/', getAllPosts)
router.get('/getPost/:id', getPost)
router.patch('/editPost/:id', editPost)
router.delete('/deletePost/:id', deletePost)
router.put('/addLike', auth, addLike)
router.get('/getLikes/:postId/:commentId?/:replyId?', getLikes);
router.post('/addComment', auth, addComment)
router.post('/addReply', auth, addReply)
router.patch('/editComment', auth, editComment)
router.patch('/editReply', auth, editReply)
router.delete('/deleteComment', auth, deleteComment)
router.delete('/deleteReply', auth, deleteReply)
router.get('/getComment/:id', getComment)
router.get('/:id/getReply/:commentId', getReply)

module.exports = router