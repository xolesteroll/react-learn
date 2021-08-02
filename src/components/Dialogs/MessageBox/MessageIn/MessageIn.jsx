import React from 'react';
import classes from "./MessageIn.module.css";

class MessageIn extends React.Component {
    render() {
        return (
            <div className={classes.message}>
                {this.props.message}
                <div className={classes.leftTail}>

                </div>
            </div>
        )
    }
}


export default MessageIn;
