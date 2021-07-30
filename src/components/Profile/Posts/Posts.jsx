import React from 'react';
import classes from "./Posts.module.css";
import NewPostContainer from "./NewPost/NewPostContainer";
import RecentPostsContainer from "./RecentPosts/RecentPostsContainer";

const Posts = (props) => {

  return (
      <div className={classes.posts}>
        <h3 className={classes.title}>My Posts</h3>
        <NewPostContainer />
        <RecentPostsContainer />
      </div>
  );
};

export default Posts;
