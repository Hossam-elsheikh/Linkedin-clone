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

const getAllPosts = async(req, res)=>{
    try{
        const allPosts = await postModel.find().populate('publisherId')
        res.status(200).json({ message: "Successfully retrieved all posts", data: allPosts });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to retrieve posts", error: err.message });
    }
}

module.exports = {addPost, getAllPosts}