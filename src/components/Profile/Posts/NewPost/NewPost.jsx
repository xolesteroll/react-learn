import React from 'react';
import classes from "./NewPost.module.css";

const NewPost = (props) => {

    let newPostElement = React.createRef()
    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.new}>
            <textarea ref={newPostElement} value={props.newPostText}
                      onChange={onPostChange}
                      className={classes.text}/>
            <button
                className={classes.button}
                onClick={addPost}
            >{props.buttonText}</button>
        </div>
  );
};

export default NewPost;
