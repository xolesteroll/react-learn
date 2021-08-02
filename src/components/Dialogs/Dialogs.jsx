import React from 'react';
import classes from "./Dialogs.module.css";
import NewMessageContainer from "./MessageBox/NewMessage/NewMessageContainer";
import ChatsContainer from "./Chats/ChatsContainer";
import MessageBoxContainer from "./MessageBox/MessageBoxContainer";

class Dialogs extends React.Component {
    render() {
        return (
            <div className={classes.dialogs}>
                <h2 className={classes.title}>Your Messages</h2>
                <div className={classes.dialogsInner}>
                    <ChatsContainer />
                    <MessageBoxContainer />
                </div>
                <NewMessageContainer />
            </div>

        )
    }
}

export default Dialogs;
