import React from 'react';
import classes from "./Chats.module.css";
import Chat from "./Chat/Chat";

const Chats = (props) => {
  return (
        <div className={classes.chats}>
            <Chat message="Chat 1" />
            <Chat message="Chat 2" />
            <Chat message="Chat 3" />
            <Chat message="Chat 4" />
            <Chat message="Chat 5" />
        </div>
  );
};

export default Chats;
