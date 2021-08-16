import React from 'react';
import classes from "./PostForm.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../../utils/formUtils";
import {Textarea} from "../../../../common/Forms/Forms";

const maxLength30 = maxLength(30)

const PostForm = (props) => {

        return (
            <form className={classes.postForm} onSubmit={props.handleSubmit}>
            <Field name={'newPost'}
                      className={classes.text}
                      placeholder="Say something to the World"
            component={Textarea}
            validate={[required, maxLength30]}/>
                <button
                    className={classes.button}
                >Add Post</button>
            </form>
        )
}


export default reduxForm({
    form: 'postForm'
})(PostForm);
