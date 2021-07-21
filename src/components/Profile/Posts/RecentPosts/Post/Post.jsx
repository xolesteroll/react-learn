import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img
          className={classes.avatar}
          src="https://cdn.pixabay.com/photo/2019/03/10/18/46/kampfstort-4046939_960_720.jpg"
          alt="avatar"
        />
        <p className={classes.content}>{props.message}</p>
      </div>
      <span className={classes.like}>Like {props.likeCount}</span>
    </div>
  );
};

export default Post;
