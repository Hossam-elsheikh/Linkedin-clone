'use client'
import { configureStore } from "@reduxjs/toolkit"
import likeSlice from "./slice/likeSlice"
import postSlice  from "./slice/postIdSlice"
import postsReducer from "./slice/postsSlice"
import commentSlice from "./slice/commentIdSlice"
import replySlice from "./slice/replyIdSlice"

const theStore = configureStore({
    reducer:{
        like:likeSlice,
        post:postSlice,
        posts:postsReducer,
        commentId:commentSlice,
        replyId:replySlice
    },
})

export const store = theStore