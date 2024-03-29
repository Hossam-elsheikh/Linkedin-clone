
import axios from "axios";
import React, { useState, useEffect } from "react";

function useGetPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const getAllPosts = async () => {
            try {
                const response = await axios.get("http://localhost:4010/post");
                const data = response.data.data;

                if (isMounted) {
                    setPosts(data);
                }
            } catch (err) {
                console.error(err);
            }
        };

        getAllPosts();

        return () => {
            isMounted = false;
        };
    }, []);

    return posts;
}

export default useGetPosts;
