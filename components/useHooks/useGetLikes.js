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
        handleGetLikes()

    }, [selectedPostId])

    return likes

}

export default GetLikes
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function GetLikes(selectedPostId) {
//     const [likes, setLikes] = useState([]);

//     useEffect(() => {
//         const handleGetLikes = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4010/post/getLikes/${selectedPostId}`);
//                 const data = response.data;

//                 // Ensure that the data received is an array before setting the state
//                 if (Array.isArray(data)) {
//                     setLikes(data);
//                 } else {
//                     console.error("Invalid data format received for likes:", data);
//                 }
//             } catch (err) {
//                 console.error("Error fetching likes:", err);
//             }
//         };

//         // Check if selectedPostId is truthy before making the API call
//         if (selectedPostId) {
//             handleGetLikes();
//         }

//     }, [selectedPostId]);

//     return likes;
// }

// export default GetLikes;