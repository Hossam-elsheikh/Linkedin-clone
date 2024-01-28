'use client'
import { configureStore } from "@reduxjs/toolkit"
import likeSlice from "./slice/likeSlice"
import  postSlice  from "./slice/postIdSlice"

const theStore = configureStore({
    reducer:{
        like:likeSlice,
        post:postSlice,
    },
})

export const store = theStore