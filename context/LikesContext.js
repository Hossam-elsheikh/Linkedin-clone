// 'use client'
// import React, { useContext, createContext, useState } from 'react'

// const LikesContext = createContext()

// export const LikesContextProvider =({children})=>{

//     const [postId, setPostId] =useState(null)

//     const setPost = (postId)=>{
//         setPostId(postId)
//     }

//     return(
//         <LikesContext.Provider value={{postId, setPost}}>
//             {children}
//         </LikesContext.Provider>
//     )

// }

// export const useLikesContext = () =>{
//     return useContext(LikesContext)
// }

