import React from 'react';
import classes from "./MessageIn.module.css";

const MessageIn = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
            <div className={classes.leftTail}>

            </div>
        </div>
    );
};

export default MessageIn;
