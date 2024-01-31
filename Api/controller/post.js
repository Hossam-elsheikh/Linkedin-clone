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
            return res.status(400).json({ message: 'invalid reaction type' })
        }

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
    const postId = req.params.id;

    try {
        const post = await postModel.findById(postId).populate('reactions.userId', 'name jobTitle profilePicture');

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const likes = post.reactions;
        return res.status(200).json(likes);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const addComment = async (req, res) => {

    const commenterId = req.id
    const { comment, postId } = req.body

    try {
        if (!commenterId) {
            return res.status(401).json({ message: 'user must log in first' })
        }

        const post = await postModel.findById(postId)

        if (!post) {
            return res.status(404).json({ message: 'post not found' })
        }

        const commentArray = post.comment;

        commentArray.push({ text:comment, commenterId })

        await post.save()

        return res.status(200).json(commentArray)

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'internal server error' })
    }
}

const addReply = async (req, res) => {
    const replierId = req.id
    const { postId, commentId, reply } = req.body
    try {
        if (!replierId) {
            return res.status(401).json({ message: "user must login first" })
        }
        const post = await postModel.findById(postId)

        if (!post) {
            return res.status(404).json({ message: 'post not found' })
        }
        const comment = post.comment.find(comment => comment._id.toString() === commentId)
        comment.replies.push({ reply, replierId })

        if (!comment) {
            return res.status(404).json({ message: 'comment not found' })
        }
        await post.save()
        return res.status(200).json(comment)

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'internal server error' })
    }
}

const getComment = async (req, res) => {
    const postId = req.params.id
    try {
        const post = await postModel.findById(postId).populate('comment.commenterId', 'profilePicture name jobTitle')
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        const comment = post.comment
        return res.status(200).json(comment)
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'internal server error' })
    }
}

const getReply = async (req, res) => {
    const postId = req.params.id
    try {
        const post = await postModel.findById(postId).populate('comment.replies.replierId', 'profilePicture name jobTitle')
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        const reply = post.comment.map(comment => comment.replies).flat()
        return res.status(200).json(reply)
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'internal server error' })
    }
}

const editComment = async (req, res) => {

    const { postId, commentId, text } = req.body
    try {
        const updateComment = await postModel.findByIdAndUpdate(
            postId,
            { $set: { 'comment.$[comment].text': text, } },
            {
                new: true,
                arrayFilters: [{ 'comment._id': commentId }],
                useFindAndModify: false,
            },
        )
        if (!updateComment) {
            return res.status(404).json({ message: 'post not found' })
        }
        return res.status(200).json(updateComment)
    } catch (err) {
        return res.status(500).json({ message: 'internal server error' })
    }
}

const editReply = async (req, res) => {
    const { postId, commentId, replyId, reply } = req.body
    try {
        const updateReply = await postModel.findByIdAndUpdate(
            postId,
            {
                $set: { 'comment.$[comment].replies.$[reply].reply': reply }
            },
            {
                new: true,
                arrayFilters: [
                    { 'comment._id': commentId },
                    { 'reply._id': replyId },
                ],
                useFindAndModify: false,
            }
        )
        if (!updateReply) {
            return res.status(404).json({ message: 'post not found' })
        }
        return res.status(200).json(updateReply)
    } catch (err) {
        return res.status(500).json({ message: 'internal server error' })
    }
}

const deleteComment = async (req, res) => {
    const { postId, commentId } = req.body
    try {

        const comment = await postModel.findOneAndUpdate(
            { _id: postId },
            { $pull: { 'comment': { '_id': commentId } } },
            { new: true, useFindAndModify: false }
        )
        if (!comment) {
            return res.status(404).json({ message: 'post not found' })
        }
        return res.status(200).json({ message: 'comment deleted successfully' })
    } catch (err) {
        return res.status(500).json({ message: 'internal server error' })
    }
}

const deleteReply = async (req, res) => {
    const { postId, commentId, replyId } = req.body
    try {
        const reply = await postModel.findOneAndUpdate(
            { _id: postId, 'comment._id': commentId },
            {
                $pull: { 'comment.$.replies': { '_id': replyId } }
            },
            { new: true, useFindAndModify: false }
        )
        if (!reply) {
            return res.status(404).json({ message: 'post not found' })
        }
        return res.status(200).json({ message: 'reply deleted successfully' })
    } catch (err) {
        return res.status(500).json({ message: 'internal server error' })
    }
}

module.exports = { addPost, getAllPosts, getPost, editPost, deletePost, addLike, getLikes, addComment, addReply, editComment, editReply, deleteComment, deleteReply, getComment, getReply }