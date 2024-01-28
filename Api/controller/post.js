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
        // const allPosts = await postModel.find().populate('publisherId')
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

const addLike = async (req, res) => {

    const { postId, reactionType } = req.body
    // console.log(req.body);  
    const userId = req.id

    try {
        if (!userId) {
            return res.status(401).json({ message: 'unauthorized: user must login first' })
        }

        const post = await postModel.findOne({ _id: postId })

        if (!post) {
            return res.status(404).json({ message: 'post not found' })
        }
        console.log('Received reactionType:', reactionType);

        if (!['like', 'clap', 'support', 'love', 'insightful', 'inquire'].includes(reactionType)) {
            // if(!['like', 'funny', 'love', 'celebrate', 'insightful', 'support'].includes(reactionType)){
            return res.status(400).json({ message: 'invalid reaction type' })
        }

        // const isLiked = post.reactions.some(reaction => reaction.userId.equals(userId) && reaction.reaction === reactionType)
        // // const isLiked = post.reactions.some(reaction => reaction.userId && reaction.userId.equals(userId));


        // if (isLiked) {
        //     post.reactions = post.reactions.filter(reaction => !reaction.userId.equals(userId))
        //     // post.reactions = post.reactions.filter(reaction => !reaction.userId.equals(userId) && reaction.reaction === reactionType)
        // }
        // else {
        //     post.reactions.push({ userId, reaction: reactionType })
        // }
        // const existingReactionIndex = post.reactions.findIndex(reaction => reaction.userId.equals(userId));

        // if (existingReactionIndex !== -1) {
        //     if (post.reactions[existingReactionIndex].reaction === reactionType) {
        //         // User is trying to remove their existing reaction
        //         post.reactions.splice(existingReactionIndex, 1);
        //     } else {
        //         // Update the existing reaction
        //         post.reactions[existingReactionIndex].reaction = reactionType;
        //     }
        // } else {
        //     // Add a new reaction
        //     post.reactions.push({ userId, reaction: reactionType });
        // }
        const existingReaction = post.reactions.findIndex(reaction => reaction.userId.equals(userId))

        if (existingReaction !== -1) {
            if (post.reactions[existingReaction].reaction === reactionType) {
                post.reactions.splice(existingReaction, 1)
            } else {
                post.reactions[existingReaction].reaction = reactionType
            }
        } else {
            post.reactions.push({ userId, reaction: reactionType })
        }

        const updatePost = await post.save()

        // const response = {
        //     post: updatePost,
        //     likeCount: updatePost.reactions.length
        // }
        // res.json(response)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error check api controller' });
    }
}

const getLikes = async (req, res) => {
    const postId  = req.params.id;

    try {
        const post = await postModel.findById(postId).populate('reactions.userId','name jobTitle profilePicture');

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const likes = post.reactions;
        return res.status(200).json( likes );
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addPost, getAllPosts, getPost, editPost, deletePost, addLike, getLikes }