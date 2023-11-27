import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InterPost } from "../components/Post/InterPost";
import { getPostsApi } from "../API/posts";


interface InterPostsState {
    list: InterPost[]
} 

const initialState: InterPostsState = {
    list: []
}

export const getPosts = createAsyncThunk(
    'getPosts',
    async() => {
        const response = await getPostsApi();
        
        return await response.json()
    }
)

const counterSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.list.push({
                id: state.list.length,
                date: new Date(),
                text: action.payload.text,
                authorId: action.payload.authorId
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.list = action.payload        
        })
    }
})

export const { addPost } = counterSlice.actions;
export default counterSlice.reducer;