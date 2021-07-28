import React from 'react';
import Post from "./Post/Post";
import classes from "./RecentPosts.module.css";

const RecentPosts = (props) => {

    let postsElements = props.state.profilePage.posts.map(el => <Post key={el.id} message={el.message} likeCount={el.likeCount}/>)

    return (
        <div className={classes.recent}>

            <h3 className={classes.title}>Recent posts</h3>
            {postsElements}
        </div>
    );
};

export default RecentPosts;
