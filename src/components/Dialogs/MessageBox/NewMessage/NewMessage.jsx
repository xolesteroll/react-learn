import React from 'react';
import classes from "./NewMessage.module.css";

const NewMessage = (props) => {
    let newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value
        props.sendMessage(text)
        newMessageElement.current.value = ''
    };

    return (
        <div className={classes.new}>
            <textarea ref={newMessageElement} defaultValue="" className={classes.text}/>
            <button
                className={classes.button}
                onClick={addMessage}
            >{props.buttonText}</button>
        </div>
  );
};

export default NewMessage;
