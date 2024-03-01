import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetLikes(selectedPostId) {

    const [likes, setLikes] = useState([])

    useEffect(() => {
        const handleGetLikes = async () => {

            try {
                const response = await axios.get(`http://localhost:4010/post/getLikes/${selectedPostId}`)
                const data = response.data
                setLikes(data)
            } catch (err) {
                console.error(err);
            }
        }
        const handleGetCommentLikes = async () => {

            try {
                const response = await axios.get(`http://localhost:4010/post/getLikes/${selectedPostId}`)
                const data = response.data
                setLikes(data)
            } catch (err) {
                console.error(err);
            }
        }
        handleGetLikes()

    }, [selectedPostId])

    return likes

}

export default GetLikes
