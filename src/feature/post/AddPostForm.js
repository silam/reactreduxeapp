import { useState } from "react";
import  {useDispatch, useSelector} from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";



const AddPostForm = () => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [userId, setUserId] = useState();


    const users = useSelector(selectAllUsers);

    const onTitleChange = e=>setTitle(e.target.value);
    const onContentChange = e=>setContent(e.target.value);
    const onAuthorChange = e=>setUserId(e.target.value);


    const dispatch = useDispatch();

    const onSavePostClicked = () =>{
        if ( title && content && userId) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle("");
            setContent("");        
            setUserId('')
        }
    }


    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const userOptions = users.map(user =>
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
        )
    return (
       <section>
            <h2>Add New Post</h2>
            <form>

                <label htmlFor="postTitle">Post Title: </label>
                <input type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title} onChange={onTitleChange} />

                <label htmlFor="postAuthor"></label>
                
                <select id="postAuthor" value={userId} 
                    onChange={onAuthorChange}>
                        <option value=""></option>
                        {userOptions}
                </select>

                <label htmlFor="postContent">Content: </label>
                <textarea id="postContent" name="postContent" 
                    value={content} onChange={onContentChange} />
                <button type="button" onClick={onSavePostClicked}
                    disabled={!canSave }
                    >Save</button>
                       
            </form>
       </section>
    )
}

export default AddPostForm