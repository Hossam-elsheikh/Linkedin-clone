const express = require('express')
const router = express.Router()
const {auth} = require('../middleWare/auth')
const {addPost, getAllPosts} = require('../controller/post')

router.post('/addPost', auth, addPost)
router.get('/', getAllPosts)

module.exports = router