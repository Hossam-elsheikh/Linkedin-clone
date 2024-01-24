import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addLike, removeLike } from "../../redux/slice/likeSlice"
import Cookies from "js-cookie"


const useLike = () => {
    const dispatch = useDispatch()
    const likePost = useSelector((state) => state.like.reaction)
    // console.log(likePost);
    const handleLikePost = async (postId, reactionType) => {
        // console.log(postId);

        try {
            const token = Cookies.get('token');
            const response = await axios.put('http://localhost:4010/post/addLike', { postId, reactionType }, { headers: { Authorization: token } })
            console.log(response);
            // if (response.status === 200) {
            if (likePost.includes(postId)) {
                dispatch(removeLike({ postId }))
            } else {
                dispatch(addLike({ postId }))
                }
            // }
        } catch (err) {
            console.error(err);
        }
    }
    return {
        handleLikePost
    }
}

export default useLike