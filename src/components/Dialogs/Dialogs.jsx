import React from 'react';
import classes from "./Dialogs.module.css";
import Chats from "./Chats/Chats";
import MessageBox from "./MessageBox/MessageBox";

const Dialogs = (props) => {
  return (
      <div className={classes.dialogs}>
          <h2 className={classes.title}>Your Messages</h2>
          <div className={classes.dialogsInner}>
              <Chats chats={props.chats}/>
              <MessageBox messages={props.messages} id="2"/>
          </div>
      </div>

  );
};

export default Dialogs;
