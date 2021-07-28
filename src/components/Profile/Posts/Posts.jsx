import React from 'react';
import NewPost from "./NewPost/NewPost";
import classes from "./Posts.module.css";
import RecentPosts from "./RecentPosts/RecentPosts";

const Posts = (props) => {

  return (
      <div className={classes.posts}>
        <h3 className={classes.title}>My Posts</h3>
        <NewPost buttonText="Add Post" store={props.store}/>
        <RecentPosts state={props.store.getState()}/>
      </div>
  );
};

export default Posts;
