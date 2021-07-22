import React from 'react';
import classes from "./TextArea.module.css";

const TextArea = () => {
  return (
    <textarea defaultValue="" className={classes.text}/>
  );
};

export default TextArea;
