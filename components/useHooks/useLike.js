import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addLike, addLikeForComment, addLikeForReply, removeLike, removeLikeForComment, removeLikeForReply } from "../../redux/slice/likeSlice"
import Cookies from "js-cookie"

const useLike = () => {
    const dispatch = useDispatch()
    const likePost = useSelector((state) => state.like.reaction)
    const token = Cookies.get('token')

    const handleLikePost = async (postId, reactionType) => {
        console.log(reactionType, postId);

        try {
            // const token = Cookies.get('token');
            const response = await axios.put('http://localhost:4010/post/addLike', { postId, reactionType }, { headers: { Authorization: token } })
            // console.log(response);
            if (likePost.includes(postId)) {
                dispatch(removeLike({ postId }))
            } else {
                dispatch(addLike({ postId }))
            }
        } catch (err) {
            console.error(err);
        }
    }
    const handleLikeComment = async (reactionType, postId, commentId,) => {
        try {
            // const token = Cookies.get('token')
            const response = await axios.put('http://localhost:4010/post/addLike', { reactionType, postId, commentId, }, { headers: { Authorization: token } })
            // console.log(response);
            if (likePost.includes(commentId)) {
                dispatch(removeLikeForComment({ commentId }))
            } else {
                dispatch(addLikeForComment({ commentId }))
            }
        } catch (err) {
            console.log(err);
        }
    }
    const handleLikeReply = async (reactionType, replyId, commentId, postId) => {
        try {
            const response = await axios.put('http://localhost:4010/post/addLike', { reactionType, replyId, commentId, postId }, { headers: { Authorization: token } })
            // console.log(response);
            if (likePost.includes(replyId)) {
                dispatch(removeLikeForReply({ replyId }))
            } else {
                dispatch(addLikeForReply({ replyId }))
            }
        } catch (err) {
            console.log(err);
        }
    }
    return {
        handleLikePost,
        handleLikeComment,
        handleLikeReply,
    }
}

export default useLike