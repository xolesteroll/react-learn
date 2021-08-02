import React from 'react'
import Post from "./Post/Post"
import classes from "./RecentPosts.module.css"

class RecentPosts extends React.Component {
    render() {
        return (
            <div className={classes.recent}>

                <h3 className={classes.title}>Recent posts</h3>
                {this.props.posts.map(el => <Post key={el.id} message={el.message} likeCount={el.likeCount}/>)}
            </div>
        )
    }
}

export default RecentPosts
