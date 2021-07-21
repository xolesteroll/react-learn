import React from 'react';
import classes from "./MessageBox.module.css";
import Message from "./Message/Message";

const MessageBox = (props) => {
    return (
        <div className={classes.messageBox}>
            <Message message="Message 1"/>
            <Message message="Message 2"/>
            <Message message="Message 3"/>
            <Message message="Message 4"/>
            <Message message="Message 5"/>
        </div>
    );
};

export default MessageBox;
