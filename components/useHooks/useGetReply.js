import axios from "axios";
import React, { useState, useEffect } from "react";

function GetReply(postId,commentId) {

    const [reply, setReply] = useState([])

    useEffect(() => {
        const handleGetReply = async () => {
            try {
                const response = await axios.get(`http://localhost:4010/post/${postId}/getReply/${commentId}`)
                const data = response.data
                // console.log(data);
                setReply(data)
            } catch (err) {
                console.error(err);
            }
        }
        handleGetReply()
    }, [postId,commentId])
    return reply
}

export default GetReply