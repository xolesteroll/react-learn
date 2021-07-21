import Post from "./Post/Post";
import classes from "./RecentPosts.module.css";

const RecentPosts = () => {
  return (
        <div className={classes.recent}>
          <h3 className={classes.title}>Recent posts</h3>
          <Post message="First Post" likeCount="17"/>
          <Post message="Second Post" likeCount="66"/>
          <Post message="Third Post" likeCount="3"/>
          <Post message="Forth Post" likeCount="88"/>
          <Post message="Fifth Post" likeCount="99"/>
        </div>
  );
};

export default RecentPosts;
