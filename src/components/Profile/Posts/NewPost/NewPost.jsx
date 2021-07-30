import React from 'react';
import classes from "./NewPost.module.css";


const NewPost = (props) => {

    let newPostText = props.newPostText

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        const text = e.target.value
        props.onPostChange(text)
    }

    return (
        <div className={classes.new}>
            <textarea value={newPostText}
                      onChange={onPostChange}
                      className={classes.text}
                      placeholder="Say something to the World"/>
            <button
                className={classes.button}
                onClick={addPost}
            >Add Post</button>
        </div>
    );
};

export default NewPost;
