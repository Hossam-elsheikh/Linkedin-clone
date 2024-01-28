import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        selectedPostId: null,
    },
    reducers: {
        selectPost: (state, action) => {
            state.selectedPostId = action.payload
        }
    }
})

export const { selectPost } = postSlice.actions

export default postSlice.reducer