import React from 'react';
import classes from "./Chats.module.css";
import Chat from "./Chat/Chat";

const Chats = (props) => {

    let chatsElements = props.chats.map(el => <Chat key={el.id} name={el.name} id={el.id}/>)

    return (
        <div className={classes.chats}>
            {chatsElements}
        </div>
    );
};

export default Chats;
