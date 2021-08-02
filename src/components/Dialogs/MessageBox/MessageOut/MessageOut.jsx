import React from 'react';
import classes from "./MessageOut.module.css";

class MessageOut extends React.Component {
    render() {
        return (
            <div className={classes.message}>
                {this.props.message}
                <div className={classes.rightTail}>

                </div>
            </div>
        )
    }
}


export default MessageOut;
