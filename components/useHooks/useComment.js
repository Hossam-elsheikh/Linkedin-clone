import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addLike, removeLike } from "../../redux/slice/likeSlice"
import Cookies from "js-cookie"


const useComment = () => {
    
    // console.log(likePost);
    const handleComment = async (postId, comment) => {
        console.log(comment);
        try {
            const token = Cookies.get('token');
            const response = await axios.post('http://localhost:4010/post/addComment', { comment,postId }, { headers: { Authorization: token } })
            console.log(response);
            
        } catch (err) {
            console.error(err);
        }
    }
    return {
        handleComment
    }
}

export default useComment