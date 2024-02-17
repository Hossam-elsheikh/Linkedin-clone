'use client'
import { configureStore } from "@reduxjs/toolkit"
import likeSlice from "./slice/likeSlice"
import  postSlice  from "./slice/postIdSlice"
import postsReducer from "./slice/postsSlice"

const theStore = configureStore({
    reducer:{
        like:likeSlice,
        post:postSlice,
        posts:postsReducer,
    },
})

export const store = theStore