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
        },
        addLikeForComment:(state,action)=>{
            state.reaction.push(action.payload.commentId)
        },
        removeLikeForComment:(state,action)=>{
            const commentIdToRemove = action.payload.commentId
            state.reaction = state.reaction.filter((removeComment)=> removeComment !==commentIdToRemove)
        },
        addLikeForReply:(state,action)=>{
            state.reaction.push(action.payload.replyId)
        },
        removeLikeForReply:(state,action)=>{
            const replyIdToRemove = action.payload.id
            const indexToRemove = state.reaction.indexOf(replyIdToRemove)
            if(indexToRemove !== -1){
            state.reaction.splice(indexToRemove,1)
            }
        },
        // removeLikeForReply:(state,action)=>{
        //     const replyIdToRemove= action.payload.id
        //     state.reaction = state.reaction.filter((replyRemove)=>replyRemove!== replyIdToRemove)
        // },
    }
})

export const { addLike, removeLike, addLikeForComment, removeLikeForComment, addLikeForReply, removeLikeForReply, } = likeSlice.actions

export default likeSlice.reducer