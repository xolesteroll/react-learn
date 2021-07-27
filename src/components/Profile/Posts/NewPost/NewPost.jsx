import React from 'react';
import classes from "./NewPost.module.css";

const NewPost = (props) => {

    let newPostElement = React.createRef()
    let addPost = () => {
        props.dispatch({
            type: 'ADD-POST'
        })
    }

    let onPostChange = () => {
        const text = newPostElement.current.value
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            text: text
        });
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
