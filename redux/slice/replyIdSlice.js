import { createSlice } from "@reduxjs/toolkit";

export const replySlice = createSlice({
    name:'replyId',
    initialState:{selectedReplyId:null},
    reducers:{
        selectReply:(state,action)=>{
            state.selectedReplyId=action.payload
        }
    }
})

export const {selectReply}= replySlice.actions
export default replySlice.reducer