import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
    name: 'like',
    initialState: {
        reaction: [],
    },
    reducers: {
        addLike: (state, action) => {
            state.reaction.push(action.payload.postId)
        },
        removeLike: (state, action) => {
            state.reaction = state.reaction.filter(
                (postId) => postId !== action.payload.postId
            )
        }
    }
})

export const { addLike, removeLike } = likeSlice.actions

export default likeSlice.reducer