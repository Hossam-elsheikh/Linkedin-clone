import axios from "axios"
import Cookies from "js-cookie"

const HandleAddReply = async (postId, commentId, reply) => {

    try {
        const token = Cookies.get('token')
        const response = await axios.post('http://localhost:4010/post/addReply', {postId, commentId, reply}, { headers: { Authorization: token } })
    } catch (err) {
        console.error(err);
    }
}

export default HandleAddReply