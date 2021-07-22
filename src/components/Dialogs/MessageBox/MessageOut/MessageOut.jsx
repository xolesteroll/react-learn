import React from 'react';
import classes from "./MessageOut.module.css";

const MessageOut = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
            <div className={classes.rightTail}>

            </div>
        </div>
    );
};

export default MessageOut;
