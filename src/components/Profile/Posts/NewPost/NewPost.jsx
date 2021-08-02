import React from 'react';
import classes from "./NewPost.module.css";

class NewPost extends React.Component {
    onPostChange = (e) => {
        const text = e.target.value
        this.props.onPostChange(text)
    }

    render() {
        return (
            <div className={classes.new}>
            <textarea value={this.props.newPostText}
                      onChange={this.onPostChange}
                      className={classes.text}
                      placeholder="Say something to the World"/>
                <button
                    className={classes.button}
                    onClick={this.props.addPost}
                >Add Post</button>
            </div>
        )
    }
}


export default NewPost;
