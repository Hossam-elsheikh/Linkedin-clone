import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name:'commentId',
    initialState:{selectedCommentId:null},
    reducers:{
        selectComment:(state,action)=>{
            state.selectedCommentId=action.payload
        }
    }
})

export const {selectComment}=commentSlice.actions
export default commentSlice.reducer