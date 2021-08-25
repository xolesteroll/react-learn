import React from 'react';
import classes from "./MessageForm.module.css";
import {reduxForm} from "redux-form";
import {createField, Textarea} from "../../../../common/Forms/Forms";
import {maxLength, required} from "../../../../../utils/formUtils";

const maxLength50 = maxLength(50)

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("text", "newMessage", Textarea, [required, maxLength50], classes.text, null, null, "Type your message here")}
            <button
                className={classes.button}
            >Send Message
            </button>
        </form>
    );
};

export default reduxForm({
    form: 'messageForm'
})(MessageForm);
