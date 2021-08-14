import React from 'react';
import classes from "./PostForm.module.css";
import {Field, reduxForm} from "redux-form";


const PostForm = (props) => {

        return (
            <form className={classes.postForm} onSubmit={props.handleSubmit}>
            <Field name={'newPost'} value={props.newPostText}
                      onChange={props.onPostChange}
                      className={classes.text}
                      placeholder="Say something to the World"
            component={'textarea'}/>
                <button
                    className={classes.button}
                >Add Post</button>
            </form>
        )
}


export default reduxForm({
    form: 'postForm'
})(PostForm);
