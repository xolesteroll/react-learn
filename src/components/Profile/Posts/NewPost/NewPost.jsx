import React from 'react';
import classes from "./NewPost.module.css";

const NewPost = (props) => {

    let newPostElement = React.createRef()
    let addPost = props.addPost;

    return (
        <div className={classes.new}>
            <textarea ref={newPostElement} defaultValue="" value="it kamasutra" className={classes.text}/>
            <button
                className={classes.button}
                onClick={() => {
                    addPost(newPostElement.current.value)
                    newPostElement.current.value = ""
                }}
            >{props.buttonText}</button>
        </div>
  );
};

export default NewPost;
