import React from 'react';
import classes from "./Dialogs.module.css";
import Chats from "./Chats/Chats";
import MessageBox from "./MessageBox/MessageBox";
import NewMessage from "./MessageBox/NewMessage/NewMessage";

const Dialogs = (props) => {
  return (
      <div className={classes.dialogs}>
          <h2 className={classes.title}>Your Messages</h2>
          <div className={classes.dialogsInner}>
              <Chats chats={props.state.chats}/>
              <MessageBox messages={props.state.messages} id="2"/>
          </div>
          <NewMessage buttonText="Send"/>
      </div>

  );
};

export default Dialogs;
