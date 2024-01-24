// import axios from "axios"
// import React, { useState, useEffect } from "react"

// function useGetPosts() {

//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         const getAllPosts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4010/post')
//                 const data = response.data.data
//                 // setPosts(prevPosts => [...prevPosts, ...data]);

//                 setPosts(data)
//             } catch (err) {
//                 console.error(err);
//             }
//         }
//         getAllPosts()
//     }, [posts])

//     return posts

// }

// export default useGetPosts

// function useGetPosts() {
//     const [key, setKey] = useState(0); // introduce a key
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const getAllPosts = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4010/post?key=${key}`);
//                 const data = response.data.data;
//                 setPosts(data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         getAllPosts();
//     }, [key]); // listen for changes in the key

//     // Function to trigger re-fetch
//     const triggerRefetch = () => {
//         setKey(prevKey => prevKey + 1);
//     };

//     return { posts, triggerRefetch };
// }
// export default useGetPosts
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

                // Check if the component is still mounted before updating state
                if (isMounted) {
                    setPosts(data);
                }
            } catch (err) {
                console.error(err);
            }
        };

        getAllPosts();

        // Cleanup function to cancel the request if the component is unmounted
        return () => {
            isMounted = false;
        };
    }, [posts]); // No dependencies to prevent infinite loop

    return posts;
}

export default useGetPosts;