import React from 'react';
import classes from "./PostForm.module.css";
import {reduxForm} from "redux-form";
import {maxLength, required} from "../../../../../utils/formUtils";
import {createField, Textarea} from "../../../../common/Forms/Forms";

const maxLength30 = maxLength(30)

const PostForm = (props) => {

        return (
            <form className={classes.postForm} onSubmit={props.handleSubmit}>
                {createField("text", "newPost", Textarea, [required, maxLength30], classes.text, null, null, "Say something to the World")}
                <button
                    className={classes.button}
                >Add Post</button>
            </form>
        )
}


export default reduxForm({
    form: 'postForm'
})(PostForm);
