import React from 'react';
import classes from "./Chat.module.css";
import {NavLink} from "react-router-dom";

const Chat = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={classes.chat} activeClassName={classes.active}>{props.name}</NavLink>
    );
};

export default Chat;
