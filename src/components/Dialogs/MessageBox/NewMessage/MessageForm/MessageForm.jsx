import React from 'react';
import classes from "./MessageForm.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/Forms/Forms";
import {maxLength, required} from "../../../../../utils/formUtils";

const maxLength50 = maxLength(50)

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field value={props.newMessageText}
                   name={"newMessage"}
                   className={classes.text}
                      placeholder="Type your message here"
            component={Textarea}
            validate={[required, maxLength50]}/>
            <button
                className={classes.button}
            >Send Message</button>
        </form>
    );
};

export default reduxForm({
    form: 'messageForm'
})(MessageForm);
