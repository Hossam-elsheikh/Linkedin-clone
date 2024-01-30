import axios from "axios";
import React, { useState, useEffect } from "react";

function GetReply(postId) {

    const [reply, setReply] = useState([])

    useEffect(() => {
        const handleGetReply = async () => {
            try {
                const response = await axios.get(`http://localhost:4010/post/getReply/${postId}`)
                const data = response.data
                console.log(data);
                setReply(data)
            } catch (err) {
                console.error(err);
            }
        }
        handleGetReply()
    }, [postId])
    return reply
}

export default GetReply