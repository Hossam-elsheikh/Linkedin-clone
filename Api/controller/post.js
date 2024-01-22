const postModel = require('../model/Post')

const addPost = async (req, res) => {
    const userId = req.id
    const { postContent, comment, reactions } = req.body
    try {
        const newPost = new postModel({
            publisherId: userId,
            postContent,
            comment: comment || [],
            reactions: reactions || []
        })
        await newPost.save()
        res.status(201).json({ message: "post Added successfully", data: newPost });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getAllPosts = async (req, res) => {
    try {
        // const allPosts = await postModel.find()
        const allPosts = await postModel.find().sort({ created: -1 }).populate('publisherId')
        res.status(200).json({ message: "Successfully retrieved all posts", data: allPosts });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to retrieve posts", error: err.message });
    }
}

const getPost = async (req, res) => {
    const postId = req.params.id
    try {
        const wantedPost = await postModel.findById(postId)
        res.status(200).json({ message: "the post:", wantedPost });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const editPost = async (req, res) => {
    const postId = req.params.id
    const { postContent } = req.body
    try {
        const patchingPost = await postModel.findByIdAndUpdate(
            postId,
            { postContent },
            { new: true }
        )
        res.status(200).json({ message: 'post patched successfully', patchingPost })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deletePost = async (req, res) => {
    const postId = req.params.id
    try {
        const deletePost = await postModel.findByIdAndDelete(postId)
        res.status(200).json({ message: 'post deleted successfully', deletePost })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { addPost, getAllPosts, getPost, editPost, deletePost }