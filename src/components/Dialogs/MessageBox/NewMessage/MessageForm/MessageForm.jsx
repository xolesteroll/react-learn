import React from 'react';
import classes from "./MessageForm.module.css";
import {Field, reduxForm} from "redux-form";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field value={props.newMessageText}
                   name={"newMessage"}
                   className={classes.text}
                      onChange={props.onMessageChange}
                      placeholder="Type your message here"
            component={"textarea"}/>
            <button
                className={classes.button}
            >Send Message</button>
        </form>
    );
};

export default reduxForm({
    form: 'messageForm'
})(MessageForm);
