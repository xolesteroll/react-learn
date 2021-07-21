import Post from "./Post/Post";
import classes from "./RecentPosts.module.css";

const RecentPosts = () => {
  return (
        <div className={classes.recent}>
          <h3 className={classes.title}>Recent posts</h3>
          <Post />
          <Post />
        </div>
  );
};

export default RecentPosts;
