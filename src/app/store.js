import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice"
import postsReducer from "../feature/post/postSlice";
import usersReducer from "../feature/users/usersSlice";



export const store = configureStore(
    {
        reducer: {
            counter: counterReducer,
            posts: postsReducer,
            users: usersReducer,
        }
    }
)

