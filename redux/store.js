'use client'
import { configureStore } from "@reduxjs/toolkit"
import likeSlice from "./slice/likeSlice"

const theStore = configureStore({
    reducer:{
        like:likeSlice,
    },
})

export const store = theStore