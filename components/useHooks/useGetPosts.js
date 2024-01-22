import axios from "axios"
import React, { useState, useEffect } from "react"

function useGetPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const response = await axios.get('http://localhost:4010/post')
                const data = response.data.data
                setPosts(data)
                // console.log(data);
            } catch (err) {
                console.error(err);
            }
        }
        getAllPosts()
    }, [posts])

    return posts

}

export default useGetPosts