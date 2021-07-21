import React from 'react';
import Button from "./Button/Button";
import classes from "./NewPost.module.css";
import TextArea from "./TextArea/TextArea";

const NewPost = () => {
  return (
        <div className={classes.new}>
          <TextArea />
          <Button />
        </div>
  );
};

export default NewPost;
