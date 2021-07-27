import React from 'react';
import classes from "./NewMessage.module.css";

const NewMessage = (props) => {
    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch({
            type: 'SEND-MESSAGE'
        })
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch({
            type: 'UPDATE-NEW-MESSAGE-TEXT',
            text: text
        })
    }

    return (
        <div className={classes.new}>
            <textarea ref={newMessageElement} value={props.newMessageText} className={classes.text} onChange={onMessageChange}/>
            <button
                className={classes.button}
                onClick={addMessage}
            >{props.buttonText}</button>
        </div>
  );
};

export default NewMessage;
