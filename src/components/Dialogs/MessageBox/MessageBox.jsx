import React from 'react';
import classes from "./MessageBox.module.css";
import MessageIn from "./MessageIn/MessageIn";
import MessageOut from "./MessageOut/MessageOut";

const MessageBox = (props) => {

    let messageElements = props.messages[props.id].map(el => el.messageOut ? <MessageOut key={el.id} message={el.message}/> :
        <MessageIn key={el.id} message={el.message}/>)

    return (
        <div className={classes.messageBox}>
            {messageElements}
        </div>
    );
};

export default MessageBox;
