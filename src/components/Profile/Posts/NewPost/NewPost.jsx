import React from 'react';
import classes from "./NewPost.module.css";
import {
    addPostCreator,
    updateNewPostTextCreator
} from "../../../../redux/profileReducer";


const NewPost = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    let onPostChange = (e) => {
        const text = e.target.value
        props.store.dispatch(updateNewPostTextCreator(text));
    }

    return (
        <div className={classes.new}>
            <textarea value={state.profilePage.newPostText}
                      onChange={onPostChange}
                      className={classes.text}
                      placeholder="Say something to the World"/>
            <button
                className={classes.button}
                onClick={addPost}
            >{props.buttonText}</button>
        </div>
    );
};

export default NewPost;
