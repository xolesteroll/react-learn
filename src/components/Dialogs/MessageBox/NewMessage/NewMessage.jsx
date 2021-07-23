import React from 'react';
import classes from "./NewMessage.module.css";

const NewMessage = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text);
    }

    return (
        <div className={classes.new}>
            <textarea ref={newPostElement} defaultValue="" className={classes.text}/>
            <button
                className={classes.button}
                onClick={addPost}
            >{props.buttonText}</button>
        </div>
  );
};

export default NewMessage;
