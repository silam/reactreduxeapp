import { createSlice, nanoid } from "@reduxjs/toolkit";
import { min, sub } from "date-fns";


const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content:'I have heard a good thing...',
            date: sub(new Date(), {minutes: 10}).toISOString()},
    {id: '2', title: 'Learning Slices ', content:'Pizza slice...',
            date: sub(new Date(), {minutes: 20}).toISOString()},

]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state, action){
                state.push(action.payload );
    
            },
            prepare(title,content, userId){
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            }
        },

        
    }
});

export const selectAllPosts = (state)=> state.posts;

export default postsSlice.reducer;

export const {postAdded} = postsSlice.actions;