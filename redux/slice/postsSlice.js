import axios from "axios";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");


export const postsAction = createAsyncThunk('posts/getAll', async () => {
    const response = await axios.get('http://localhost:4010/post')
    return response.data.data
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: { posts: [], error:null},
    extraReducers: (builder) => {
        builder.addCase(postsAction.fulfilled, (state, action) => {
            state.posts = action.payload
            state.error=null
        })
        builder.addCase(postsAction.rejected, (state,action) => {
            state.error=action.error.message || 'failed to fetch posts'
        })
    }
})

export default postsSlice.reducer