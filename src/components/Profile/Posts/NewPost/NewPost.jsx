import React from 'react';
import classes from "./NewPost.module.css";
import PostForm from "./PostForm/PostForm";

class NewPost extends React.Component {
    onSubmit = (formData) => {
        this.props.addPost(formData.newPost)
        this.props.clearForm("postForm")
    }


    render() {
        return (
            <div className={classes.new}>
            <PostForm {...this.props} onSubmit={this.onSubmit} />
            </div>
        )
    }
}


export default NewPost;
