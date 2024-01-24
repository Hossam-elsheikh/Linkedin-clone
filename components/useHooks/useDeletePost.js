import axios from "axios";
import React, { useState, useEffect } from "react";

function useDeletePost() {

    const [deletePost, setDeletePost] = useState([])

    const handleDeletePost = async (postId) => {
        try {
            const response = await axios.delete(`http://localhost:4010/post/deletePost/${postId}`)
            if (response.status === 200) {
                setDeletePost((deleteOnTheWay) => [...deleteOnTheWay, postId])
            }
        } catch (err) {
            console.error(err);
        }
        handleDeletePost()
    }
    return deletePost
}

export default useDeletePost