import React from 'react';
import classes from "./NewPost.module.css";
import PostForm from "./PostForm/PostForm";

class NewPost extends React.Component {
    onPostChange = (e) => {
        const text = e.target.value
        this.props.updateNewPostText(text)
    }

    onSubmit = () => {
        this.props.addPost()
        this.props.clearForm("postForm")
    }

    render() {
        return (
            <div className={classes.new}>
            <PostForm {...this.props} onPostChange={this.onPostChange} onSubmit={this.onSubmit} />
            </div>
        )
    }
}


export default NewPost;
