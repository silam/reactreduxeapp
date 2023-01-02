import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content:'I have heard a good thing...'},
    {id: '2', title: 'Learning Slices ', content:'Pizza slice...'},

]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded(state, action){
            state.push(action.payload );

        }
    }
});

export const selectAllPosts = (state)=> state.posts;

export default postsSlice.reducer;

export const {postAdded} = postsSlice.actions;