import React from 'react'
import classes from "./Posts.module.css"
import NewPostContainer from "./NewPost/NewPostContainer"
import RecentPostsContainer from "./RecentPosts/RecentPostsContainer"

class Posts extends React.Component {
    render() {
        return (
            <div className={classes.posts}>
                <h3 className={classes.title}>My Posts</h3>
                <NewPostContainer />
                <RecentPostsContainer />
            </div>
        )
    }
}

export default Posts
