import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetComment(postId) {

    const [comment, setComment] = useState([])

    useEffect(() => {
        const handleGetComment = async () => {

            try {
                const response = await axios.get(`http://localhost:4010/post/getComment/${postId}`)
                const data = response.data
                setComment(data)
            } catch (err) {
                console.error(err);
            }
        }
        handleGetComment()
    }, [postId])

    return comment

}

export default GetComment