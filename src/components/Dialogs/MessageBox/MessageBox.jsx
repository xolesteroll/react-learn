import React from 'react';
import classes from "./MessageBox.module.css";
import MessageIn from "./MessageIn/MessageIn";
import MessageOut from "./MessageOut/MessageOut";

class MessageBox extends React.Component {

    render() {
        return (
            <div className={classes.messageBox}>
                {this.props.messages.map(el => el.messageOut ? <MessageOut key={el.id} message={el.message}/> :
                    <MessageIn key={el.id} message={el.message}/>)}
            </div>
        );
    }
}

export default MessageBox;
